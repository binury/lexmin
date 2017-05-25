import test from 'ava'
import request from 'supertest'

import { app } from '../src/app'
import { Todo } from '../src/routes/todos'

test.beforeEach( async t => {
  await Todo.remove()
  t.context.request = request( app.callback())
})

test( 'listing is empty', async t => {
  const { body, status, type } = await t.context.request.get( '/todos' )
  t.is( status, 200 )
  t.is( type, 'application/json' )
  t.is( body.length, 0 )
})

test( 'create new resource', async t => {
  const { status } = await t.context.request.post( '/todos' ).send({
    title: 'Be awesome'
  })
  t.is( status, 201 )
})
