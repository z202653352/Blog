import http from '@/utils/request.js'

// 用户个人信息
export const userInfoHttp = params => http({ url: '/client/myInfo', method: 'GET', params })

// 修改用户个人信息
export const editUserInfoHttp = params => http({ url: '/client/changeInfo', method: 'POST', params })

// // 注销
// export const logoutHttp = params => http({ url: '/client/logout', method: 'GET', params })