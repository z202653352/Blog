import axios from 'axios' // 引入
import { ElMessage } from 'element-plus'
// import { getToken } from '@/utils/token'

let baseURL = '/api'

// 这一步的目的是判断出当前是开发环境还是生成环境，方法不止一种，达到目的就行
// if(process.env.NODE_ENV=='development'){
//   baseURL=''
// }else{
//   baseURL=''
// }

//
export const showMessage = (status) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

const config = {
  baseURL: baseURL,
  // 因为跨域了，所以这里如果写的话会自动拼接，会有两份，所以隐藏了
  timeout: 30000 // 设置最大请求时间
}
const _axios = axios.create(config)

// /* 请求拦截器（请求之前的操作） */
_axios.interceptors.request.use(
  config => {
    // 如果有需要在这里开启请求时的loading动画效果
    // config.headers.Authorization = getToken  //添加token,需要结合自己的实际情况添加，
    return config
  },
  err => Promise.reject(err)
)

// /* 请求之后的操作 */
_axios.interceptors.response.use((res) => {
    // 在这里关闭请求时的loading动画效果
    // 这里用于处理返回的结果，比如如果是返回401无权限，可能会是跳回到登录页的操作，结合自己的业务逻辑写
    // 一定结合自己的后端的返回代码进行操作
    // if (res.data.code === 401) {
    //   console.log('无权限操作')
    // }
    return res
  },
  err => {
    const { response } = err
    if (err) {
      // 提示错误信息
      ElMessage.error(showMessage(response.status))
      // 在这里关闭请求时的loading动画效果
      console.log('请求网络失败')
    }
    return Promise.reject(err)
  }
)

// 封装post,get,delete,put方法
const http = ({ url, method, ...params }) => {
  const opitons = {
    method, url,
    ...params,
    headers: { 'Content-Type': 'application/jsoncharset=UTF-8' }
  }
  // if (method === 'GET' || method === 'DELETE') {
  //   opitons.params = data
  // }else {
  //   opitons.data = data
  // }
  return new Promise((resolve, reject) => {
    _axios({
      ...opitons
    }).then(res => {
      resolve(res.data)
      return res
    }).catch(error => {
      reject(error)
    })
  })

}

// 暴露所写的内容
export default http
