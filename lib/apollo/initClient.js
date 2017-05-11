import { ApolloClient, createNetworkInterface } from 'react-apollo'

let apolloClient = null

function _initClient (headers, initialState) {
  const networkInterface = createNetworkInterface({
    uri: GRAPHQL_ENDPOINT, /* global GRAPHQL_ENDPOINT */
    opts: {
      credentials: 'same-origin'
    }
  })
  networkInterface.use([{
    applyMiddleware (req, next) {
      if (typeof localStorage === 'undefined' || localStorage === null) {
        // server side
      } else {
        if (localStorage.getItem('token')) {
          if (!req.options.headers) {
            req.options.headers = {}  // Create the header object if needed.
          }
          /* global localStorage */
          req.options.headers['authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
      }
      next()
    }
  }])

  return new ApolloClient({
    initialState,
    ssrMode: !process.browser,
    dataIdFromObject: result => result.id || null,
    networkInterface: networkInterface
  })
}

export const initClient = (headers, initialState = {}) => {
  if (!process.browser) {
    return _initClient(headers, initialState)
  }
  if (!apolloClient) {
    apolloClient = _initClient(headers, initialState)
  }
  return apolloClient
}
