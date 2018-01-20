import Test from '../components/Test/Test.vue';

/* Route level code split */
const Home = () => import('../views/Home.vue');
const Signup = () => import('../views/Signup/Signup.vue');
const NewStory = () => import('../views/NewStory/NewStory.vue');
const Login = () => import('../views/Login/Login.vue');

/* Protected routes */
const protectedRoutes = [
  { path: '/test', component: Test, meta: { auth: true } },
  { path: '/new', component: NewStory, meta: { auth: true } }
];

/* Public routes */
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/register', component: Signup },
  {
    path: '/login',
    component: Login,

    // Spread route query as props
    props: (route) => ({ ...route.query })
  }
];

export default [
  ...protectedRoutes,
  ...publicRoutes
];
