import { db } from '../';

export const createNewStory = async newStory => {
  // Get a story uid
  const storyUid = !newStory.storyUid ? db.ref().child('stories').push().key : newStory.storyUid;

  const story = {
    ...newStory,
    storyUid
  };

  // Update to database
  await db.ref(`/stories/${storyUid}`).update(story);
  return story;
};

export const getStoryBySlug = async slug => {
  const stories = await db.ref().child("stories").once('value');
  return stories.val() && Object.values(stories.val()).find(s => s.slug === slug);
};
