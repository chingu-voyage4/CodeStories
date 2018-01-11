/**
 * Observe user authentication state,
 * Set logged in user object in store
 * based on auth state.
 */

export default (auth, store) => {
  /* eslint-disable arrow-parens */
  auth.onAuthStateChanged(user => {
    if (user) {
      store.commit('setLoggedInUser', user);
    } else {
      store.commit('setLoggedInUser', null);
    }
  });
};
