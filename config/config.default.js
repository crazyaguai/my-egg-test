// config/config.default.js
// exports.keys = "123456";

module.exports = appInfo => {
  console.log("=============")
  console.log(appInfo)
  return {
    keys: '123456'
  };
};