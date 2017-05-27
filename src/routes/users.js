import Router from 'koa-router';
import { Model, Database } from 'mongorito';
import bcrypt from 'bcrypt';
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
    const {email, password} = ctx.request.body;
    const saltRounds = 5;

    await bcrypt
      .hash(password, saltRounds)
      .then(hash => {
        const user = new User({
          email,
          password: hash,
        });
        user.save();
      });

    ctx.status = 201;
  });

export default router;
