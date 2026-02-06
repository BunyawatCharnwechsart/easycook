import { Hono } from 'hono'
import users from './users'
import menu from './menu'

const routes = new Hono()

routes.route('/users', users)
routes.route('/menu', menu)

export default routes
