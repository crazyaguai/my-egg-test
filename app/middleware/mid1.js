module.exports = config => {
  console.log('中间件配置：',config)
  return async function mid1(ctx,next){
    console.log('mid1 start')
    await next()
    console.log('mid1 end')
  }
}