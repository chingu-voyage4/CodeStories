import { db } from '../'

export const saveDraftStory = async story => {
  // Get a story uid
  const storyUid = !story.storyUid ? db.ref().child('draftStories').push().key : story.storyUid
  const _story = {
    ...story,
    storyUid
  }

  // Update to database
  await db.ref(`/draftStories/${storyUid}`).update(_story)
  return _story
}
