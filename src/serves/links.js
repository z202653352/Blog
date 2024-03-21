import http from '@/utils/request.js'


// 标签列表
export const friendLinkListHttp = params => http({ url: '/friendLinkList', method: 'POST', params: params })


