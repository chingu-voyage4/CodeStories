import { db } from '../';
import StorySchema from '../../schema/story';
import { getRandomKey } from '../../util';

export const createNewStory = newStory => {
  // Get a story uid
  const storyUid = db.ref().child('stories').push().key;

  const ranKey = getRandomKey();

  // Create a url friendly slug from story title
  const slug = ranKey;

  const story = {
    ...StorySchema,

    // Overide default values with actual inputs
    storyUid,
    slug,
    ...newStory
  };

  // Update to database
  return db.ref(`/stories/${storyUid}`).update(story);
};
