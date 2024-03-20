export const encapsulationRes = ({code,data,msg})=>{
  if (code === '200'){
    return data
  }
  new Error(msg || '获取不到信息！！！')
  return null
}