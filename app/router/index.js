module.exports = (app)=>{
  const {router,controller} = app
  require('./test')(app)
}