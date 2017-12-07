import Head from 'next/head'
import { Component } from 'react'
import { withTheme } from 'material-ui/styles'
import { loadGetInitialProps } from 'next/dist/lib/utils'

export default function withHead (ComposedComponent) {
  class withHead extends Component {
    static async getInitialProps (ctx) {
      return loadGetInitialProps(ComposedComponent, ctx)
    }

    render () {
      return <div>
        <Head>
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
          <link rel='manifest' href='/static/manifest.json' />
          <title>Chefbook</title>
          <meta name='viewport' content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name='theme-color' content={this.props.theme.palette.primary[500]} />

        </Head>
        <ComposedComponent {...this.props} />
      </div>
    }
  }
  return withTheme()(withHead)
}
