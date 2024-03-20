import http from '@/utils/request.js'


// 置顶文章
export const articleTopHttp = params => http({ url: '/article/articleTop', method: 'POST', params: params })

// 文章列表
export const articleListHttp = params => http({ url: '/article/articleList', method: 'POST', params: params })

//个人信息
export const myInfoHttp = params => http({ url: '/client/aboutMe', method: 'GET', params: params })

//文章数量
export const articleNumHttp = params => http({ url: '/article/articleNum', method: 'GET', params: params })

//评论数量
export const commentNumHttp = params => http({ url: '/article/commentNum', method: 'GET', params: params })

//标签数量
export const labelNumHttp = params => http({ url: '/article/labelNum', method: 'GET', params: params })

//博客信息
export const blogInfoHttp = params => http({ url: '/other/blogInfo', method: 'GET', params: params })

// 文章详情
export const articleDetailHttp = params => http({url: '/article/articleDetail', method: 'POST', params: params })