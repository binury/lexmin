import test from 'ava';
import request from 'supertest';

import app from '../src/app';
import { Question } from '../src/routes/questions';

// Remove all database entries and start a fresh application
test.beforeEach(async t => {
  await Question.remove({});
  t.context.request = request(app.callback());
});

test('listing is empty', async t => {
  const { body, status, type } = await t.context.request.get('/questions');
  t.is(status, 200);
  t.is(type, 'application/json');
  t.is(body.length, 0);
});

test('create new resource', async t => {
  const { status } = await t.context.request.post('/questions').send({
    text: 'Be awesome'
  });
  t.is(status, 201);
});
