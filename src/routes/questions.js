import Router from 'koa-router';
import { Model, Database } from 'mongorito';
const db = new Database('localhost/lexmin');

export class Question extends Model {}

const router = new Router();
db.connect();
db.register(Question);

router.get('/questions', async (ctx) => {
  ctx.body = await Question.find();
});

router.post('/questions', async (ctx) => {
  const { title } = ctx.request.body;
  const question = new Question({ title, completed: false });
  await question.save();
  ctx.status = 201;
});

export default router;
