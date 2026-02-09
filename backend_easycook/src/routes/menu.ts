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


export default menu