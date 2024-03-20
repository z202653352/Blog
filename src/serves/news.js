import http from '@/utils/request.js'


// 置顶文章
export const trendsListHttp = params => http({ url: '/trendsList', method: 'POST', params: params })

