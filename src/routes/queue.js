import Router from 'koa-router'
import { Model, Database } from 'mongorito'

const db = new Database( 'localhost/lexmin' )
export class Question extends Model {}

const router = new Router()

router.get( '/questions', async ( ctx ) => {
  ctx.body = Question.find()
})

router.post( '/questions', async ( ctx ) => {
  const { title } = ctx.request.body
  const question = new Question({ title, completed: false })
  await question.save()
  ctx.status = 204
})

/*router.get( '/completed', async ctx => {
 ctx.body = await Question.find({ completed: true })
 })*/
db.connect();
db.register( Question );
db.disconnect();
export default router


