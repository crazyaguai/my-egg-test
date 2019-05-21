// app.js
class AppBootHook {
  constructor(app) {
    this.app = app;
    this.app.on('server',()=>{
      console.log('server start')
    })
  }

  async serverDidReady() {
    console.log('ready---')
    this.app.Fun1()
  }
}

module.exports = AppBootHook