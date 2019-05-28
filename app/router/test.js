module.exports = app => {
  const {router,controller} = app
  console.log('test router')
  //手动运行任务
  app.runSchedule('s1')
  router.get('/',controller.home.index)
  router.get('/search',controller.test.getSearch)
  router.get('/params/:id',controller.test.getParams)
  router.post('/post',controller.test.getBody)
  router.post('/file',controller.test.getFile)
  router.get('/getData',controller.test.getData)
  // app.router.redirect('/', '/home/index', 302);
}