import moment from 'moment';
import { getStoryBySlug } from '../../firebase/api/stories';
import { getUserByUid } from '../../firebase/api/users';
import { getCoverPhotoUrl } from '../../firebase/api/storage';
import { MUTATE_SINGLE_STORY, FETCH_SINGLE_STORY } from './singleStory.type';

export default {
  [FETCH_SINGLE_STORY]: async ({ commit }, slug) => {
    const story = await getStoryBySlug(slug);
    const result = await getUserByUid(story.author);
    const author = result.val();

    // Firebase js sdk doesn't support storage in nodejs
    // https://github.com/firebase/firebase-js-sdk/issues/18
    const coverPhotoUrl = await getCoverPhotoUrl(story.coverPhotoPath);
    const publishAt = moment(story.publishAt).format('DD MMM YYYY');

    commit(MUTATE_SINGLE_STORY, { ...story, author, coverPhotoUrl, publishAt });
  }
};
