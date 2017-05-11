import React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { initClient } from '../apollo/initClient'
import { initStore } from '../redux/initStore'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default ComposedComponent => (
  class extends React.Component {
    static async getInitialProps (ctx) {
      const headers = ctx.req ? ctx.req.headers : {}
      const client = initClient(headers)
      const store = initStore(client, client.initialState)

      const props = {
        url: { query: ctx.query, pathname: ctx.pathname },
        ...await loadGetInitialProps(ComposedComponent, ctx)
      }

      if (!process.browser) {
        const app = (
          <ApolloProvider client={client} store={store}>
            <ComposedComponent {...props} />
          </ApolloProvider>
        )
        await getDataFromTree(app)
      }

      const state = store.getState()

      return {
        initialState: {
          ...state,
          apollo: {
            data: client.getInitialState().data
          }
        },
        headers,
        ...props
      }
    }

    constructor (props) {
      super(props)
      this.client = initClient(this.props.headers, this.props.initialState)
      this.store = initStore(this.client, this.props.initialState)
    }

    render () {
      return (
        <ApolloProvider client={this.client} store={this.store}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
)
