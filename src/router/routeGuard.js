/**
 * A global guard for authenticated routes.
 * Checks if the route needs authentication,
 * redirects to login route if is authenticated
 * route and the user is not logged in.
 */

export default (store) => {
  const loggedInUser = store.getters.user;
  return (to, from, next) => {
    if ((to.meta && to.meta.auth) && !loggedInUser) {
      next({
        path: '/login',
        query: { returnTo: to.fullPath }
      });
    }
    next();
  };
};
