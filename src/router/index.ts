import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Ref_reactive from "../views/ref_reactive/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "ref_reactive",
    component: Ref_reactive,
  },
  {
    path: "/watch_watchEffect",
    name: "watch_watchEffect",
    component: () =>
      import( "@/views/watch_watchEffect/index.vue"),
  },
  {
    path: "/computed",
    name: "computed",
    component: () =>
      import( "@/views/computed/index.vue"),
  },
  {
    path: "/v-model",
    name: "v-model",
    component: () =>
      import( "@/views/v-model/index.vue"),
  },
  {
    path: "/shallowRef_shallowReactive",
    name: "shallowReactive",
    component: () =>
      import( "@/views/shallowRef_shallowReactive/index.vue"),
  },
  {
    path: "/toRaw",
    name: "toRaw",
    component: () =>
      import( "@/views/toRaw/index.vue"),
  },
  {
    path: "/markRaw",
    name: "markRaw",
    component: () =>
      import( "@/views/markRaw/index.vue"),
  },
  {
    path: "/toRef",
    name: "toRef",
    component: () =>
      import( "@/views/toRef/index.vue"),
  },
  {
    path: "/customRef",
    name: "customRef",
    component: () =>
      import( "@/views/customRef/index.vue"),
  },
  {
    path: "/hook",
    name: "hook",
    component: () =>
      import( "@/views/hook/index.vue"),
  },
  {
    path: "/teleport",
    name: "hook",
    component: () =>
      import( "@/views/teleport/index.vue"),
  },
  {
    path: "/suspense",
    name: "suspense",
    component: () =>
      import( "@/views/suspense/index.vue"),
  },
  {
    path: "/setup",
    name: "setup",
    component: () =>
      import( "@/views/setup/index.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
