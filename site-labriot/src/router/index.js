import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Projetos from '../views/ProjetosPage.vue';
import Contato from '../views/ContatoPage.vue';
import Blog from '../views/BlogPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projetos', component: Projetos },
  { path: '/contato', component: Contato },
  { path: '/blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
