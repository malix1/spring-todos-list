import Vue from "vue";
import VueRouter from "vue-router";
import { userRoutes } from "../routes/userRoutes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: userRoutes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = window.$cookies.get("token");
    if (token !== null) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
