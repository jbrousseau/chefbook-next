import RecipeListContainer from '../components/container/RecipeListContainer'
import page from 'lib/hoc/page'
import { Component } from 'react'

class IndexPage extends Component {
  componentDidMount () {
    /* global navigator */
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render () {
    return <RecipeListContainer />
  }
}

export default page()(IndexPage)
