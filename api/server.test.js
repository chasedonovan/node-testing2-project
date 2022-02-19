const request =require('supertest')
const server = require('./server')
const db = require('../data/db-config')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.send.run()
})
afterAll(async() => {
    await db.destroy()
})

describe('GET /api/southpark', () => {
    test('status 200 on success', async ()  => {
        const res = await request(server).get('/api/southpark')
        expect(res.status).toBe(200)
    })
    test('POST /api/southpark', async () => {
        const res = await request(server)
            .post('/api/southpark')
            .send({ name: 'test' })
            expect(res.status).toBe(201)
    })
})
