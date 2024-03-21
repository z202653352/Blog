import http from '@/utils/request.js'


// 标签列表
export const labelListHttp = params => http({ url: '/article/labelList', method: 'GET', params: params })

// 分类列表
export const lableDetailHttp = params => http({ url: '/article/lableDetail', method: 'POST', params: params })
