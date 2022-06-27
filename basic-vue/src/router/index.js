import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        // 루트
        {
            path: "/",
            name: "root",
            component: "@/components/"
        },
        // 라우트가 일치하지 않으면 루트 URL로 이동
        {
            path: "/:path*",
            redirect: { name: "root" },
        },
    ],
});

export default router;