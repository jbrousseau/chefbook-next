const express = require('express')
const next = require('next')
const postgraphql = require('postgraphql').postgraphql
const dotenv = require('dotenv')
fetch = require('node-fetch') // eslint-disable-line

// Load the config from .env file.
dotenv.load()
const {
  DB_STRING,
  DB_SCHEMA,
  SECRET,
  DEFAULT_ROLE,
  JWT_TOKEN_IDENTIFIER
} = process.env

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // Mount the postgraphql as middleware.
  server.use(postgraphql(DB_STRING, DB_SCHEMA, {
    pgDefaultRole: DEFAULT_ROLE,
    classicIds: true,
    graphiql: true,
    jwtSecret: SECRET,
    jwtPgTypeIdentifier: JWT_TOKEN_IDENTIFIER
  }))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${process.env.IP}:${process.env.PORT}`)
  })
})