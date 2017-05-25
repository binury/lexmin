import Router from 'koa-router'

const router = new Router(),
  todos = []

router.get( '/todos', async ( ctx ) => {
  ctx.body = todos
})

router.post( '/todos', async ( ctx ) => {
  const { title } = ctx.request.body
  todos.push({ title, completed: false })
  ctx.status = 201
})

export default router
