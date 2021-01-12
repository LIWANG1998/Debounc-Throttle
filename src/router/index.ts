import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Click from "../views/Click.vue";
import Scoll from "../views/Scoll.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Click",
    name: "Click",
    component: Click
  },
  {
    path: "/Scoll",
    name: "Scoll",
    component: Scoll
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
