import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Recommand",
        meta: {
            title: "推荐",
            keepAlive: true
        },
        component: () => import("../views/recommend.vue"),
    },
    {
        path: "/singer",
        name: "Singer",
        meta: {
            title: "歌手",
            keepAlive: true
        },
        component: () => import("../views/singer.vue"),
    },
    {
        path: "/rank",
        name: "Rank",
        meta: {
            title: "歌手",
            keepAlive: true
        },
        component: () => import("../views/rank.vue"),
    },
    {
        path: "/search",
        name: "Search",
        meta: {
            title: "搜索",
            keepAlive: true
        },
        component: () => import("../views/search.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;