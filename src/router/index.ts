import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Rank from '../views/rank/rank.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/recommend',
        component: () => import("../views/recommend/recommend.vue"),
    },
    {
        path: "/recommend",
        name: "Recommand",
        meta: {
            title: "推荐",
            keepAlive: true
        },
        component: () => import("../views/recommend/recommend.vue"),
    },
    {
        path: "/singer",
        name: "Singer",
        meta: {
            title: "歌手",
            keepAlive: true
        },
        component: () => import("../views/singer/singer.vue"),
    },
    {
        path: "/rank",
        name: "Rank",
        meta: {
            title: "歌手",
            keepAlive: true
        },
        component: Rank
        // component: () => import("../views/rank.vue"),

    },
    {
        path: "/search",
        name: "Search",
        meta: {
            title: "搜索",
            keepAlive: true
        },
        component: () => import("../views/search/search.vue"),
    },
    {
        path: "/user",
        name: "User",
        meta: {
            title: "搜索",
        },
        component: () => import("../views/mine/mine.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;