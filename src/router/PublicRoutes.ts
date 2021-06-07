import { RouteRecordRaw } from "vue-router";

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "about" */ "@/modules/Home/index.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "@/modules/About/index.vue"),
    },
];