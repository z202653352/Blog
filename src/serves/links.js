import http from '@/utils/request.js'


// 友情链接列表
export const friendLinkListHttp = params => http({ url: '/friendLinkList', method: 'POST', params })

// 友情链接申请
export const applyFriendLinkHttp = params => http({ url: '/applyFriendLink', method: 'POST', params })

