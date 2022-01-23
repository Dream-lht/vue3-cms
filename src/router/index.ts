import { createRouter,createWebHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";
//创建路由表
const routes:RouteRecordRaw[] = [
  {
    path:"/",
    redirect:'/login'
  },
  {
    path:'/login',
    component:() => import('@/view/Login/index.vue')
  },
  {
    path:'/main',
    component:() => import('@/view/Main/index.vue')
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export {
  router
};

