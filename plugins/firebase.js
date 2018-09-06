import { auth } from '../firebase'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        store.commit('setLoggedInUser', user, { root: true })
      } else {
        store.commit('setLoggedInUser', null, { root: true })
      }
      resolve()
    })
  })
}
