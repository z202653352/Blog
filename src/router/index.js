import { createRouter, createWebHistory } from 'vue-router'
import loginRouter from './loginRouter';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    loginRouter, // 登录路由
    {
      path: '/',
      // name: 'Article',
      component: () => import('../Layout/index.vue'),
      redirect: '/article',
      children: [
        {
          path: '/article',
          name: 'Article',
          meta: { title: '首页', type: 'menu' },
          component: () => import('../views/Article/list.vue')
        },
        {
          path: '/details/:id',
          name: 'Details',
          meta: { title: '详情' },
          component: () => import('../views/Article/details.vue')
        },
        {
          path: '/archive',
          name: 'Archive',
          meta: { title: '文章归档', type: 'menu' },
          component: () => import('../views/Archive/archive.vue')
        },

        {
          path: '/community',
          name: 'Community',
          meta: { title: '互动社区', type: 'menu' },
          component: () => import('../views/Community/community.vue')
        },
        {
          path: '/creativity',
          name: 'Creativity',
          meta: { title: '创意空间', type: 'menu' },
          component: () => import('../views/Creativity/creativity.vue')
        },
        {
          path: '/links',
          name: 'Links',
          meta: { title: '友情链接', type: 'menu' },
          component: () => import('../views/Links/links.vue')
        },
        {
          path: '/news',
          name: 'News',
          meta: { title: '站点动态', type: 'menu' },
          component: () => import('../views/News/news.vue')
        },
        {
          path: '/userInfo',
          name: 'UserInfo',
          meta: { title: '个人信息' },
          component: () => import('../views/UserInfo/userInfo.vue')
        },
        {
          path: '/changePassword',
          name: 'ChangePassword',
          meta: { title: '修改密码' },
          component: () => import('../views/ChangePassword/changePassword.vue')
        },
      ]
    },
  ]
})

export default router
