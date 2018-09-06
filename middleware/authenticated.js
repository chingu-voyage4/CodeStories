/**
 * Authentication check
 */
export default ({ store, redirect }) => {
  const loggedInUser = store.getters.user
  if (!loggedInUser) {
    redirect('/login')
  }
}
