const express = require('express')
const next = require('next')
const postgraphql = require('postgraphql').postgraphql
const { parse } = require('url')
const { join } = require('path')
const { DB_STRING, DB_SCHEMA, SECRET, DEFAULT_ROLE, JWT_TOKEN_IDENTIFIER, GRAPHQL_ENDPOINT } = require('./config')

fetch = require('node-fetch') // eslint-disable-line

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
    graphqlRoute: GRAPHQL_ENDPOINT,
    jwtSecret: SECRET,
    jwtPgTypeIdentifier: JWT_TOKEN_IDENTIFIER,
    disableQueryLog: !dev,
    extendedErrors: dev ? ['detail'] : [],
    showErrorStack: dev
  }))

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const rootStaticFiles = [
      '/robots.txt',
      '/sitemap.xml',
      '/favicon.ico'
    ]
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname)
      app.serveStatic(req, res, path)
    }
    return handle(req, res)
  })

  server.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on https://${process.env.IP}:${process.env.PORT}`)
  })
})
