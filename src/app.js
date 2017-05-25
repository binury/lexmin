import Koa from 'koa'
import Router from 'koa-router'
import bodyparser from 'koa-bodyparser'
import routes from './routes/index'

const app = new Koa()
const router = new Router()

app.listen( 3000 )
app.use( bodyparser())
router.use( routes.routes())
app.use( router.routes())
