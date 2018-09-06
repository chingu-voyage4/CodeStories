export const strict = false

export const state = () => ({
  user: null
})

export const mutations = {
  setLoggedInUser (state, user) {
    state.user = user
  }
}

export const getters = {
  user (state) {
    return state.user
  }
}
