export default {
  path: '/loginFrame',
  name: 'LoginFrame',

  children: [
    {
      path: '/login',
      name: 'Login',
      meta: { title: '登录' },
      component: () => import('../views/Login/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      meta: { title: '注册' },
      component: () => import('../views/Login/register.vue')
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      meta: { title: '忘记密码' },
      component: () => import('../views/Login/forgetPassword.vue')
    }

  ]
}