import http from '@/utils/request.js'

export const user = params => http({ method: 'GET', url: '/api', data: params })

