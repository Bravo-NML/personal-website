import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about-me",
    name: "about-me",
    component: () => import("../views/AboutMe.vue"),
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/hard-skills",
    name: "hard-skills",
    component: () => import("../views/HardSkills.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
