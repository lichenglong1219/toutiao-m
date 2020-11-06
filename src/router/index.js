import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 定义路由
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  // 文章详情页路由
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article'),
    props: true // 开启了路由传参,把路由参数映射到组件中
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/pa',
        name: 'pa',
        component: () => import('@/views/pa')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
