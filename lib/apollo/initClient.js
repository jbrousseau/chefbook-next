import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client-preset'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function _initClient (initialState) {
  const httpLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT, /* global GRAPHQL_ENDPOINT */
    credentials: 'same-origin'
  })

  let headers = {}
  /* global localStorage */
  if (process.browser && localStorage !== 'undefined' && localStorage.getItem('token')) {
    headers = {
      authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }

  const middlewareLink = setContext(() => ({
    headers
  }))
  const link = middlewareLink.concat(httpLink)

  const cache = new InMemoryCache().restore(initialState)

  const client = new ApolloClient({
    link,
    ssrMode: !process.browser,
    connectToDevTools: process.browser,
    cache
  })

  return client
}

export const initClient = (initialState = {}) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return _initClient(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = _initClient(initialState)
  }
  console.log(apolloClient.cache.data)

  return apolloClient
}
