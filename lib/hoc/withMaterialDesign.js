/* eslint-disable flowtype/require-valid-file-annotation */
import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import wrapDisplayName from 'recompose/wrapDisplayName'
import getContext from 'lib/styles/getContext'
import { loadGetInitialProps } from 'next/dist/lib/utils'

// Apply some reset
const styles = theme => ({
  '@global': {
    html: {
      background: theme.palette.background.default,
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale' // Antialiasing.
    },
    body: {
      margin: 0
    }
  }
})

let AppWrapper = props => props.children

AppWrapper = withStyles(styles)(AppWrapper)

function withMaterialDesign (ComposedComponent) {
  class withMaterialDesign extends Component {
    static getInitialProps (ctx) {
      return loadGetInitialProps(ComposedComponent, ctx)
    }

    componentWillMount () {
      this.styleContext = getContext()
    }

    componentDidMount () {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render () {
      return (
        <MuiThemeProvider
          theme={this.styleContext.theme}
          sheetsManager={this.styleContext.sheetsManager}
        >
          <AppWrapper>
            <ComposedComponent {...this.props} />
          </AppWrapper>
        </MuiThemeProvider>
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    withMaterialDesign.displayName = wrapDisplayName(ComposedComponent, 'withMaterialDesign')
  }

  return withMaterialDesign
}

export default withMaterialDesign
