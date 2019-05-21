module.exports = app => {
  const {router,controller} = app
  console.log('test router')
  router.get('/',controller.home.index)
  router.get('/search',controller.test.getSearch)
  router.get('/params/:id',controller.test.getParams)
  router.post('/post',controller.test.getBody)
  // app.router.redirect('/', '/home/index', 302);
}