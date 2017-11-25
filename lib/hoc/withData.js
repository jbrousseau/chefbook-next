import React from 'react'
import Head from 'next/head'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { initApollo } from '../apollo/initApollo'
import PropTypes from 'prop-types'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import 'isomorphic-fetch'
import ReactDOMServer from 'react-dom/server'

export default ComposedComponent => class withData extends React.Component {
  static propTypes = {
    serverState: PropTypes.object.isRequired
  }

  static async getInitialProps (ctx) {
    let serverState = {
      apollo: {
        data: { }
      }
    }
    const props = {
      url: { query: ctx.query, pathname: ctx.pathname },
      ...await loadGetInitialProps(ComposedComponent, ctx)
    }
    if (!process.browser) {
      const apollo = initApollo()
      const app = (
        <ApolloProvider client={apollo}>
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
      const content = ReactDOMServer.renderToString(app)
      serverState = {
        apollo: {
          data: apollo.cache.extract()
        },
        content: content
      }
    }
    return {
      serverState,
      ...props
    }
  }

  constructor (props) {
    super(props)
    this.apollo = initApollo(this.props.serverState.apollo.data)
  }

  render () {
    return (
      <ApolloProvider client={this.apollo}>
        <ComposedComponent {...this.props} />
      </ApolloProvider>
    )
  }
}
