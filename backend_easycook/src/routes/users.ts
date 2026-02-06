import { Hono } from 'hono'
import { getDb } from '../db'
import * as z from 'zod'
import { zValidator } from '@hono/zod-validator'

const users = new Hono()

// GET /users
users.get('/', async (c) => {
    try {
        const db = getDb(c)
        const r = await db.prepare('SELECT * FROM users').all()
        return c.json(r.results || [])
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

// GET /users/:uid
users.get('/:uid', async (c) => {
    try {
        const uid = Number(c.req.param('uid'))
        if (Number.isNaN(uid)) {
            return c.json({ error: 'Invalid user id' }, 400)
        }
        const db = getDb(c)
        const r = await db
            .prepare('SELECT * FROM users WHERE uid = ?')
            .bind(uid)
            .all()
        const user = r.results?.[0]
        if (!user) {
            return c.json({ error: 'Not found' }, 404)
        }
        return c.json(user)
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

//type createschema
const createUserSchema = z.object({
    name: z.string({ message: 'กรอกชื่อ' }).max(20, 'ห้ามมากกว่า 20 ตัวอักษร'),
    password: z.string({ message: 'กรอกรหัสผ่าน' }).min(8, 'ห้ามน้อยกว่า 8 ตัวอักษร'),
    email: z.string({ message: 'กรอก email' })
})

type CreateUserInput = z.infer<typeof createUserSchema>

//POST create user
users.post('/', zValidator('json', createUserSchema), async (c) => {
    try {
        const body = c.req.valid('json') as CreateUserInput
        const db = getDb(c)
        const result = await db
            .prepare(`
                    INSERT INTO users (name, password, email)
                    VALUES (?, ?, ?)
                    RETURNING *
                `)
            .bind(body.name, body.password, body.email)
            .run()
        return c.json({ message: 'User created', data: result.results?.[0] }, 201)
    } catch (err: any) {
        if (err.message?.includes('UNIQUE constraint failed')) {
            return c.json(
                { error: 'Email นี้ถูกใช้งานแล้ว' },
                409
            )
        }
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

export default users
