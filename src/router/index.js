import { createRouter, createWebHistory } from 'vue-router';
import SongsDirectory from '../components/SongsDirectory.vue';

import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/songs',
    name: 'SongsDirectory',
    component: SongsDirectory,
    props: route => ({ query: route.query.q || '' }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
