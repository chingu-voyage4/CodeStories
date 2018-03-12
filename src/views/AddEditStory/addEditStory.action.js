import slug from 'limax';
import { auth } from '../../firebase';
import StorySchema from '../../schema/story';
import { uploadCoverPhoto } from '../../firebase/api/storage';
import { createNewStory } from '../../firebase/api/stories';
import { saveDraftStory } from '../../firebase/api/draftStories';
import { getRandomKey } from '../../util';

import {
  STORY_PUBLISH,
  STORY_SAVE
} from './addEditStory.type';

export default {
  [STORY_PUBLISH]: async (store, s) => {
    const {
      storyTitle,
      story,
      category,
      tag,
      coverPhotoURL,
      publishAt,
      storyUid
    } = s;
    const response = await uploadCoverPhoto(coverPhotoURL);
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
      coverPhotoURL,
      storyUid
    } = s;

    // Upload cover photo if it exits
    const response = coverPhotoURL ? await uploadCoverPhoto(coverPhotoURL) : null;
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
  }
};
