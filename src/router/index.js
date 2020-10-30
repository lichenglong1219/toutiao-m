import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 定义路由
const routes = [
  { path: '/login', component: () => import('@/views/login') }
]

const router = new VueRouter({
  routes
})

export default router
