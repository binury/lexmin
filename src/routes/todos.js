import Router from 'koa-router'
import { Model, Database } from 'mongorito'
const db = new Database( 'localhost/todos' )

export class Todo extends Model {}
const router = new Router(),
  todos = []



router.get( '/', async ( ctx ) => {
  ctx.body = Todo.find()
})

router.post( '/', async ( ctx ) => {
  const { title } = ctx.request.body
  const todo = new Todo({ title, completed: false })
  await todo.save()
  ctx.status = 204
})

router.get('/completed', async ctx => {
  ctx.body = await Todo.find({completed: true})
})

export default router

