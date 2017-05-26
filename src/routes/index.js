import Router from 'koa-router';
import questions from './questions';
import users from './users';

const routes = new Router();

routes.use(
    questions.routes(),
    questions.allowedMethods(),
    users.routes(),
    users.allowedMethods(),
);

export default routes;
