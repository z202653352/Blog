import http from '@/utils/request.js'

// 修改密码
export const changePwdHttp = params => http({ url: '/client/changePwd', method: 'POST', params: params })
