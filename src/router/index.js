import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../components/LoginComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import ArithmeticComponent from '../components/ArithmeticComponent.vue';
import store from '../store';

const routes = [
  { path: '/', component: LoginComponent},
  { path: '/login', component: LoginComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/arithmetic', component: ArithmeticComponent, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;