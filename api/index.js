const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, '../db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

// su Vercel esponiamo tutto sotto /api
server.use('/api', router)

module.exports = server
