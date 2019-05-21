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
    ctx.body = 'success'
  }
}

module.exports = TestController
