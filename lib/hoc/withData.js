import React from 'react'
import Head from 'next/head'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { initClient } from '../apollo/initClient'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import 'isomorphic-fetch'

export default ComposedComponent => class withData extends React.Component {
  static propTypes = {
    serverState: PropTypes.object.isRequired
  }

  static async getInitialProps (ctx) {
    const headers = ctx.req ? ctx.req.headers : {}
    // Initial serverState with apollo (empty)
    let serverState = { apollo: { } }

    const props = {
      url: { query: ctx.query, pathname: ctx.pathname },
      ...await loadGetInitialProps(ComposedComponent, ctx)
    }

    if (!process.browser) {
      const client = initClient()
      const app = (
        <ApolloProvider client={client}>
          <ComposedComponent {...props} />
        </ApolloProvider>
      )
      try {
        await getDataFromTree(app)
      } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        console.log(error)
      }
      // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually
      Head.rewind()
          // Extract query data from the Apollo store
      serverState = {
        apollo: {
          data: client.cache.extract()
        }
      }
    }

    return {
      serverState,
      headers,
      ...props
    }
  }

  constructor (props) {
    super(props)
    this.client = initClient(this.props.serverState.apollo.data)
  }

  render () {
    return (
      <ApolloProvider client={this.client}>
        <ComposedComponent {...this.props} />
      </ApolloProvider>
    )
  }
}
