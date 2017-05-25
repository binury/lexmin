import Koa from 'koa'
import bodyparser from 'koa-bodyparser'
import todos from './routes/todos'

export const app = new Koa()
app.listen( 3000 )
app.use( bodyparser())
app.use( todos.routes())

