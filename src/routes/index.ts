import { createRouter, createWebHistory } from 'vue-router';
import { PublicRoutes } from './PublicRoutes';

const router = createRouter({
    history: createWebHistory(),
    routes: [...PublicRoutes],
});

export default router;
