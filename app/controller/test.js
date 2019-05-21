const Controller = require('egg').Controller

class TestController extends Controller {
  async getSearch(){
    const {ctx,app} = this
    console.log('search data')
    console.log(ctx.search)
    console.log(ctx.query)
    console.log(ctx.queries)
    ctx.body = {a:123}
  }
  async getParams(){
    const {ctx} = this
    console.log('params data')
    console.log(ctx.params)
    ctx.body = 'success'
  }
  async getBody(){
    const {ctx} = this
    console.log('body data')
    console.log(ctx.request.body)
    console.log(ctx.method)
    ctx.body = 'success'
  }
  async getFile(){
    const {ctx} = this
    const file = ctx.request.files;
    console.log("文件-------------")
    console.log(file)
    ctx.body = '123'
  }
}

module.exports = TestController
