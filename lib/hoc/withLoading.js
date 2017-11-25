import NProgress from 'nprogress'
import Router from 'next/router'
import { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ComposedComponent => class WithLoading extends Component {
  static async getInitialProps (ctx) {
    return loadGetInitialProps(ComposedComponent, ctx)
  }

  constructor (props) {
    super(props)
    this.state = {
      canRender: false
    }
  }

  render () {
    return <div><ComposedComponent {...this.props} /></div>
  }
}
