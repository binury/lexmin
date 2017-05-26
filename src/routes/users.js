import Router from 'koa-router';
import { Model, Database } from 'mongorito';
const db = new Database('localhost/lexmin');

export class User extends Model {}

const router = new Router();
db.connect();
db.register(User);

router
.get('/users', async (ctx) => {
  // TODO: restrict
  ctx.body = await User.find();
})
.post('/users', async (ctx) => {
  // TODO: authenticate
  const { name, password } = ctx.request.body;
  const user = new User({
    name,
    password,
  });
  await user.save();
  ctx.status = 201;
});

export default router;
