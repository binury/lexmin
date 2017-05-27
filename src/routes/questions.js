import Router from 'koa-router';
import { Model, Database } from 'mongorito';
const db = new Database('localhost/lexmin');

export class Question extends Model {}

const router = new Router();
db.connect();
db.register(Question);

router
  .get('/questions', async (ctx) => {
    ctx.body = await Question.find();
  })
  .post('/questions', async (ctx) => {
    // TODO: authenticate
    const { title } = ctx.request.body;
    const question = new Question({
      text: 'Test question',
      author: 'Test author',
    });
    await question.save();
    ctx.status = 201;
  });

export default router;
