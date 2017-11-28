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

  constructor () {
    super()
    this.state = {
      mounted: false
    }
  }

  componentDidMount () {
    // trick to make the animation work is to call the set state next run
    setTimeout(() => {
      this.setState({mounted: true})
    }, 1)
  }

  render () {
    return (
      <div className={'animated ' + (this.state.mounted ? 'mounted' : '')}>
        <ComposedComponent {...this.props} />
        <style jsx>{`
          .animated {
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease-in;
          }
          .animated.mounted {
            opacity: 1;
            visibility: visible;
          }
        `}</style>
      </div>
    )
  }
}
