import Vue from 'vue';
import Router from 'vue-router';
import Test from '../components/Test/Test.vue';
import Home from '../views/Home.vue';

Vue.use(Router);

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Test },
      { path: '/home', component: Home}
    ]
  });
}
