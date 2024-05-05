import http from '@/utils/request.js'


// 新增评论
export const addCommunityCommentHttp = params => http({ url: '/comment/addCommunityComment', method: 'POST', params: params })

// 评论列表
export const gelCommunityCommentListHttp = params => http({ url: '/comment/selCommunityCommentList', method: 'POST', params: params })
