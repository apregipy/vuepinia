import { createRouter, createWebHistory } from 'vue-router';

// Impor komponen yang akan dipakai di setiap route
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Ganti process.env.BASE_URL dengan import.meta.env.BASE_URL
    routes,
  });
  

export default router;
