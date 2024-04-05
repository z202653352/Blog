import http from '@/utils/request.js'

// 登录
export const loginHttp = params => http({ url: '/client/login', method: 'POST', params })

// 注册
export const registerHttp = params => http({ url: '/client/register', method: 'POST', params })

// 忘记密码
export const forgetHttp = params => http({ url: '/client/resetPwd', method: 'POST', params })

// 发送验证码
export const sendCoedHttp = params => http({ url: '/client/sendCoed', method: 'POST', params })