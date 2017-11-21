import injectTapEventPlugin from 'react-tap-event-plugin'
import {deepOrange500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import { Component } from 'react'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const muiTheme = {
  palette: {
    accent1Color: deepOrange500
  }
}

export default ComposedComponent => class withMaterialDesign extends Component {
  static async getInitialProps (ctx) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = ctx.req.headers['user-agent']
    }
    return {
      userAgent,
      ...await loadGetInitialProps(ComposedComponent, ctx)
    }
  }

  render () {
    const { userAgent } = this.props

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
        <ComposedComponent {...this.props} />
      </MuiThemeProvider>
    )
  }
}
