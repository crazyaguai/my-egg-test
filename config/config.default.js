// config/config.default.js
// exports.keys = "123456";

module.exports = appInfo => {
  return {
    keys: '123456',
    //中间件配置
    middleware: ['mid1'],
    mid1: {
      config1: 123,
      enable: false
    },
    security: {
      csrf: {
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      },
    },
  };
};