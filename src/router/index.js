import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExternalRedirectView from "../views/ExternalRedirectView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/projects",
            name: "projects",
            component: () => import("../views/ProjectView.vue"),
        },
        {
            path: "/LinkedIn",
            name: "LinkedIn",
            component: ExternalRedirectView,
            props: {
                url: "https://www.linkedin.com/in/sam-ryan-6144587a/",
            },
        },
        {
            path: "/Medium",
            name: "Medium",
            component: ExternalRedirectView,
            props: {
                url: "https://medium.com/@sam.ryan101",
            },
        },
        {
            path: "/GitHub",
            name: "GitHub",
            component: ExternalRedirectView,
            props: {
                url: "https://github.com/iamsahm",
            },
        },
        {
            path: "/LinkedIn",
            name: "LinkedIn",
            component: ExternalRedirectView,
            props: {
                url: "https://www.linkedin.com/in/sam-ryan-6144587a/",
            },
        },
    ],
});

export default router;
