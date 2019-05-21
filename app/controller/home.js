// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.fun1()
    this.ctx.body = 'Hello world'; 
  }
}

module.exports = HomeController;
