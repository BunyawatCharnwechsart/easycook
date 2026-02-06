import { Hono } from 'hono'
import { cors } from 'hono/cors'
import routes from './routes'

const app = new Hono()

app.use('*', cors({
    origin: '*',
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.get('/', (c) => c.text('Welcome to EasyCook API'))

// mount routes
app.route('/', routes)

export default app