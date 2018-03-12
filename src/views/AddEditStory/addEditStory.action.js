import slug from 'limax';
import { auth } from '../../firebase';
import StorySchema from '../../schema/story';
import { uploadCoverPhoto, getCoverPhotoUrl } from '../../firebase/api/storage';
import { createNewStory, getStoryBySlug } from '../../firebase/api/stories';
import { saveDraftStory } from '../../firebase/api/draftStories';
import { getRandomKey } from '../../util';

import {
  STORY_PUBLISH,
  STORY_SAVE,
  FETCH_STORY,
  INIT_STORY,
  FETCH_STORY_COVERPHOTO,
  MUTATE_STORY
} from './addEditStory.type';

export default {
  [STORY_PUBLISH]: async (store, s) => {
    const {
      storyTitle,
      story,
      category,
      tag,
      coverPhotoUrl,
      publishAt,
      storyUid
    } = s;
    const response = await uploadCoverPhoto(coverPhotoUrl);
    const coverPhotoPath = response.ref.location.path_;

    const ranKey = getRandomKey();
    // Create a url friendly slug from story title
    // and append random key to make it unique
    const storySlug = `${slug(storyTitle)}-${ranKey}`;

    const newStory = {
      ...StorySchema,

      // Overhide defaults
      storyTitle,
      story,
      storyUid,
      author: auth.currentUser.uid,
      category,
      tag,
      coverPhotoPath,
      slug: storySlug,
      publishAt: publishAt || Date.now()
    };

    // Publish new story
    const publishedStory = await createNewStory(newStory);

    // Save to draft stories so that story will be sync.
    await saveDraftStory(publishedStory);
    return publishedStory;
  },
  [STORY_SAVE]: async (store, s) => {
    const {
      storyTitle,
      story,
      category,
      tag,
      coverPhotoUrl,
      storyUid
    } = s;

    // Upload cover photo if it exits
    const response = coverPhotoUrl ? await uploadCoverPhoto(coverPhotoUrl) : null;
    const _story = {
      ...StorySchema,
      storyTitle,
      author: auth.currentUser.uid,
      story,
      category,
      tag,
      storyUid,
      coverPhotoPath: response ? response.ref.location.path_ : ''
    };

    return saveDraftStory(_story);
  },
  [FETCH_STORY]: async (store, _slug) => {
    const story = await getStoryBySlug(_slug);

    // Format category and tag as UI needs
    const category = { options: story.category, selected: story.category };
    const tag = { options: story.tag, selected: story.tag };
    store.commit(INIT_STORY, { ...story, category, tag });
  },
  [FETCH_STORY_COVERPHOTO]: async ({ commit }, coverPhotoPath) => {
    const coverPhotoUrl = await getCoverPhotoUrl(coverPhotoPath);
    commit(MUTATE_STORY, { key: 'coverPhotoUrl', val: coverPhotoUrl });
  }
};
