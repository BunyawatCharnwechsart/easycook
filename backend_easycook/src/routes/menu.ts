import { Hono } from "hono";
import { getDb } from "../db";
import * as z from 'zod'
import { zValidator } from '@hono/zod-validator'

const menu = new Hono()

//All menu
menu.get('/', async (c) => {
    try {
        const db = getDb(c)
        const r = await db.prepare('SELECT * FROM menu').all()
        return c.json(r.results || [])
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

//menu + วิธีทำ + วัตถุดิบ
menu.get('/:menuid', async (c) => {
    try {
        const menuid = Number(c.req.param('menuid'))
        if (Number.isNaN(menuid)) {
            return c.json ({ error: 'Invalid menu id' }, 400)
        }
        const db = getDb(c)
        const r = await db
        .prepare(`SELECT * FROM menu WHERE menuid = ?`)
        .bind(menuid)
        .all()
        const menu = r.results?.[0]
        if (!menu) {
            return c.json({ error: 'Not found' }, 404)
        }
        return c.json(menu)
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

export default menu