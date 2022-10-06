import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("@/pages/HomePage.vue");
const Rent = () => import("@/pages/RentPage.vue");

const routes = [
  {
    path: "/home",
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

export default router;
