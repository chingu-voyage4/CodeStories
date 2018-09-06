import moment from 'moment'
import { getStoryBySlug } from '../firebase/api/stories'
import { getUserByUid } from '../firebase/api/users'
import { getCoverPhotoUrl } from '../firebase/api/storage'

export const moduleName = 'singleStory' // Must be same as filename

export const FETCH_SINGLE_STORY = 'FETCH_SINGLE_STORY'
export const MUTATE_SINGLE_STORY = 'MUTATE_SINGLE_STORY'
export const GET_SINGLE_STORY = 'GET_SINGLE_STORY'
export const INIT_SINGLE_STORY = 'INIT_SINGLE_STORY'
export const FETCH_SINGLE_STORY_COVERPHOTO = 'FETCH_SINGLE_STORY_COVERPHOTO'

export const state = () => ({
  title: '',
  coverPhotoUrl: '',
  story: '',
  author: null,
  categories: [],
  tags: [],
  hearts: [],
  onSinglePage: false
})

export const mutations = {
  [INIT_SINGLE_STORY]: (state, story) => {
    const singleStory = { ...state, ...story }
    state = singleStory
  },
  [MUTATE_SINGLE_STORY]: (state, { key, val }) => {
    state[key] = val
  }
}

export const actions = {
  [FETCH_SINGLE_STORY]: async ({ commit }, slug) => {
    const story = await getStoryBySlug(slug)
    const result = await getUserByUid(story.author)
    const author = result.val()

    // Firebase js sdk doesn't support storage in nodejs
    // https://github.com/firebase/firebase-js-sdk/issues/18
    // So, we will fetch story cover photo in client side
    const publishAt = moment(story.publishAt).format('DD MMM YYYY')

    commit(`${moduleName}/${INIT_SINGLE_STORY}`, {
      ...story,
      author,
      publishAt,
      onSinglePage: true
    })
  },
  [FETCH_SINGLE_STORY_COVERPHOTO]: async ({ commit }, coverPhotoPath) => {
    const coverPhotoUrl = await getCoverPhotoUrl(coverPhotoPath)
    commit(`${moduleName}/${MUTATE_SINGLE_STORY}`, {
      key: 'coverPhotoUrl',
      val: coverPhotoUrl
    })
  }
}

export const getters = {
  [GET_SINGLE_STORY]: state => {
    return state
  }
}
