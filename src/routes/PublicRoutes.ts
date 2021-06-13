import { RouteRecordRaw } from 'vue-router';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/admin/dashboard',
    },
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Dashboard/index.vue'),
    },
];
