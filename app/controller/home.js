// app/controller/home.js
const Controller = require('egg').Controller;
const fs = require('fs')

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app
    } = this
    console.log('当前运行环境：', app.config.env)
    console.log('当前config key：', app.config.keys)
    this.ctx.fun1()
    // this.ctx.body = 'Hello world';
    await ctx.render('index.njk');
  }
}

module.exports = HomeController;