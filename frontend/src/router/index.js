import LandingPage from "@/views/LandingPage.vue";
import VisitorPage from "@/views/VisitorPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/visitor",
        name: "Visitor",
        component: VisitorPage
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;