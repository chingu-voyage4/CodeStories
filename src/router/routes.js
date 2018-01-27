import Test from '../components/Test/Test.vue';
import Login from '../views/Login/Login.vue';
import Home from '../views/Home.vue';
import Signup from '../views/Signup/Signup.vue';
import StoryPage from '../views/Stories Page/storiesPage.vue'
import Stories from '../views/Stories.vue';
import Profile from '../views/Profile.vue';

/* Protected routes */
const protectedRoutes = [
  { path: '/test', component: Test, meta: { auth: true } }
];

/* Public routes */
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/register', component: Signup },
  { path: '/storyPage', component: StoryPage},
  { path: '/stories', component: Stories },
  { path: '/profile', component: Profile },
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
