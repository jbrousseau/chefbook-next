import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'
import fetch from 'isomorphic-unfetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function _initApollo (initialState) {
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

  const middlewareLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers
    })
    return forward(operation)
  })
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

export const initApollo = (initialState = {}) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return _initApollo(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = _initApollo(initialState)
  }

  return apolloClient
}