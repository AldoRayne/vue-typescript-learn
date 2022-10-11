import { createWebHistory, createRouter } from "vue-router";

import RouteItem from "@/types/routeItem";

const Home = () => import("@/pages/HomePage.vue");
const Rent = () => import("@/pages/RentPage.vue");

const routes: RouteItem[] = [
  {
    path: "/vue-typescript-learn",
    name: "Home",
    component: Home,
  },
  {
    path: "/rent",
    name: "Rent",
    component: Rent,
  },
  {
    path: "/sale",
    name: "Sale",
    component: Rent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") next({ name: "Home" });
  next();
});

export default router;
