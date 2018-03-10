/* Route level code split */
const Home = () => import('../views/Home.vue');
const Signup = () => import('../views/Signup/Signup.vue');
const NewStory = () => import('../views/NewStory/NewStory.vue');
const Stories = () =>  import('../views/Stories.vue');
const Login = () => import('../views/Login/Login.vue');
const SingleStory = () => import('../views/SingleStory/SingleStory.vue');

/* Protected routes */
const protectedRoutes = [
  { path: '/new', component: NewStory, meta: { auth: true } }
];

/* Public routes */
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/register', component: Signup },
  { path: '/stories', component: Stories },
  {
    path: '/login',
    component: Login,

    // Spread route query as props
    props: (route) => ({ ...route.query })
  },

  // Since story slug will be appended random key, so it
  // won't conflict with above routes
  { path: '/:slug', component: SingleStory},

  // For user profile, '@' will be prepended to username as medium.com
  // does, so it won't conflict with other routes
  // { path: '/@:username', component: Profile }
];

export default [
  ...protectedRoutes,
  ...publicRoutes
];
