import Koa from 'koa';
import Router from 'koa-router';
import IO from 'koa-socket';
import auth from 'koa-jwt';
import jwt from 'jsonwebtoken';
import bodyparser from 'koa-bodyparser';
import routes from './routes/index';

export const app = new Koa();
const router = new Router();
const io = new IO();

const secret = 'beetlejuicebeetlejuicebeetlejuice';
// app.use(useauth({ secret }));

io.attach(app);
io.on('join', (ctx, data) => {
  console.log('A user joined', data)
});

app.listen(process.env.PORT || 3030);
app.use(bodyparser());
router.use(routes.routes());

// DEBUG
router.get('/gentoken', async (ctx) => {
  const token = jwt.sign({
    data: 'foobar'
  }, secret, { expiresIn: '24h' });
  ctx.cookies.set('access_token', token);
  ctx.body = `Token assignment successful: \n ${token}`
})
app.use(router.routes());
