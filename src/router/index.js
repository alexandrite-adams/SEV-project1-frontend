import { createRouter, createWebHistory } from "vue-router";
import Base from "../views/Base.vue";
import LoginPage from "../views/Login.vue";

const router = createRouter({
  mode: "history",
  linkExactActiveClass: "active",
  base: process.env.NODE_ENV === "development" ? "/" : "/",
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      alias: "/loginPage",
      component: LoginPage,
      name: "loginPage",
    },
    {
      path: "/base",
      component: Base,
      name: "base",
    },
  ],
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    return next("/");
  }
  next();
});

export default router;
