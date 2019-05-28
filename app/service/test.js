const Service = require('egg').Service

class TestService extends Service{
  async getData(params = {}){
    return {a:1}
  }
}

module.exports = TestService