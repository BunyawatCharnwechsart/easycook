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

//Get menu by id
menu.get('/:id', async (c) => {
    try {
        const db = getDb(c)
        const r = await db.prepare('SELECT * FROM menu WHERE id = ?').get(c.req.param('id'))
        return c.json(r || null)
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

//Create menu
menu.post('/', async (c) => {
    try {
        const db = getDb(c)
        const { name, description, price, image } = await c.req.json()
        const r = await db.prepare('INSERT INTO menu (name, description, price, image) VALUES (?, ?, ?, ?)').run(name, description, price, image)
        return c.json(r.results || [])
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

//Update menu
menu.put('/:id', async (c) => {
    try {
        const db = getDb(c)
        const { name, description, price, image } = await c.req.json()
        const r = await db.prepare('UPDATE menu SET name = ?, description = ?, price = ?, image = ? WHERE id = ?')
        .run(name, description, price, image, c.req.param('id'))
        return c.json(r.results || [])
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

//Delete menu
menu.delete('/:id', async (c) => {
    try {
        const db = getDb(c)
        const r = await db.prepare('DELETE FROM menu WHERE id = ?').run(c.req.param('id'))
        return c.json(r.results || [])
    } catch (err: any) {
        return c.json(
            { error: err?.message || String(err) },
            500
        )
    }
})

export default menu