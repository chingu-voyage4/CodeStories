import slug from 'limax'
import { auth } from '../firebase'
import StorySchema from '../firebase/schema/story'
import { getCoverPhotoUrl, getCoverPhotoPath } from '../firebase/api/storage'
import { createNewStory, getStoryBySlug } from '../firebase/api/stories'
import { saveDraftStory } from '../firebase/api/draftStories'
import { getRandomKey } from '../util'

export const moduleName = 'story' // Must be same as filename

export const GET_STORY = 'GET_STORY'
export const MUTATE_STORY = 'MUTATE_STORY'
export const INIT_STORY = 'INIT_STORY'
export const STORY_SAVE = 'STORY_SAVE'
export const STORY_PUBLISH = 'STORY_PUBLISH'
export const FETCH_STORY = 'FETCH_STORY'
export const FETCH_STORY_COVERPHOTO = 'FETCH_STORY_COVERPHOTO'

export const state = () => ({
  editor: {
    options: {
      placeholder: { text: 'Write a story ...' }
    }
  },
  storyUid: '',
  publishAt: null,
  storyTitle: '',
  story: '',
  coverPhotoUrl: '',
  coverPhotoPath: '',
  category: {
    options: [],
    selected: []
  },
  tag: {
    options: [],
    selected: []
  },
  storySaveLoading: false,
  storyPublishLoading: false
})

export const mutations = {
  [MUTATE_STORY]: (state, payload) => {
    state[payload.key] = payload.val
  },
  [INIT_STORY]: (state, story) => {
    const _story = { ...state, ...story }
    state = _story
  }
}

export const actions = {
  [STORY_PUBLISH]: async (store, s) => {
    const {
      storyTitle,
      story,
      category,
      tag,
      coverPhotoUrl,
      coverPhotoPath,
      publishAt,
      storyUid
    } = s

    const ranKey = getRandomKey()
    const _coverPhotoPath = await getCoverPhotoPath(
      coverPhotoPath,
      coverPhotoUrl
    )

    // Create a url friendly slug from story title
    // and append random key to make it unique
    const storySlug = `${slug(storyTitle)}-${ranKey}`

    const newStory = {
      ...StorySchema,

      // Overhide defaults
      storyTitle,
      story,
      storyUid,
      author: auth.currentUser.uid,
      category,
      tag,
      coverPhotoPath: _coverPhotoPath,
      slug: storySlug,
      publishAt: publishAt || Date.now()
    }

    // Publish new story
    const publishedStory = await createNewStory(newStory)

    // Save to draft stories so that story will be sync.
    await saveDraftStory(publishedStory)
    return publishedStory
  },
  [STORY_SAVE]: async (store, s) => {
    const {
      storyTitle,
      story,
      category,
      tag,
      coverPhotoUrl,
      coverPhotoPath,
      storyUid
    } = s

    const _coverPhotoPath = await getCoverPhotoPath(
      coverPhotoPath,
      coverPhotoUrl
    )
    const _story = {
      ...StorySchema,
      storyTitle,
      author: auth.currentUser.uid,
      story,
      category,
      tag,
      storyUid,
      coverPhotoPath: _coverPhotoPath
    }

    return saveDraftStory(_story)
  },
  [FETCH_STORY]: async (store, _slug) => {
    const story = await getStoryBySlug(_slug)

    // Format category and tag as UI needs
    const category = { options: story.category, selected: story.category }
    const tag = { options: story.tag, selected: story.tag }
    store.commit(`${moduleName}/${INIT_STORY}`, { ...story, category, tag })
  },
  [FETCH_STORY_COVERPHOTO]: async ({ commit }, coverPhotoPath) => {
    const coverPhotoUrl = await getCoverPhotoUrl(coverPhotoPath)
    commit(`${moduleName}/${MUTATE_STORY}`, {
      key: 'coverPhotoUrl',
      val: coverPhotoUrl
    })
  }
}

export const getters = {
  [GET_STORY]: state => {
    return state
  }
}
