import jwt from 'jsonwebtoken';
import Router from 'koa-router';
import { User } from './users';
import bcrypt from 'bcrypt';

const router = new Router();
const secret = 'beetlejuicebeetlejuicebeetlejuice'; // remove

function genToken(email) {
    return jwt.sign({ email }, secret, { expiresIn: '72h' } );
}
router
  .post('/login', async (ctx) => {
    console.log('Login request received') // DEBUG
    const { email, password } = ctx.request.body;
    const user = await User.findOne({ email } );
    const matched = await bcrypt.compare(password, user.toJSON().password)
    if (matched) {
        const token = genToken(email);
        ctx.cookies.set('access_token', token);
        ctx.body = token;
    } else ctx.body = 'no sir';
  });


export default router
