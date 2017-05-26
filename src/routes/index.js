import Router from 'koa-router';
import questions from './questions';

const routes = new Router();

routes.use(questions.routes(), questions.allowedMethods());

export default routes;
