// app.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async serverDidReady() {
    console.log(this.app)
    console.log('ready---')
    console.log('ready---')
    console.log('ready---')
    console.log('ready---')
    this.app.Fun1()
  }
}

module.exports = AppBootHook