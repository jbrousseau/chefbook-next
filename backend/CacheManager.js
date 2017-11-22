const LRUCache = require('lru-cache')

function CacheManager (dev) {
  // This is where we cache our rendered HTML pages
  this.ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60 // 1hour
  })
  this.dev = dev
}
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
CacheManager.prototype.getCacheKey = function (req) {
  return `${req.url}`
}

CacheManager.prototype.renderAndCache = function (app, req, res, pagePath, queryParams) {
  const key = this.getCacheKey(req)

  // If we have a page in the cache, let's serve it
  if (this.ssrCache.has(key) && !this.dev) {
    console.log(`CACHE HIT: ${key}`)
    res.send(this.ssrCache.get(key))
    return
  }

  // If not let's render the page into HTML
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      console.log(`CACHE MISS: ${key}`)
      this.ssrCache.set(key, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

module.exports = CacheManager
