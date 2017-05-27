import Router from 'koa-router';
import questions from './questions';
import users from './users';
import login from './login';

const routes = new Router();

routes.use(
    questions.routes(),
    questions.allowedMethods(),
    users.routes(),
    users.allowedMethods(),
    login.routes(),
    login.allowedMethods(),
);

export default routes;
