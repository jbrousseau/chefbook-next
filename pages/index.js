import RecipeListContainer from '../components/container/RecipeListContainer'

import page from 'lib/hoc/page'
import { Component } from 'react'
import Router from 'next/router'
import DataLoading from 'components/generic/DataLoading'
import NoSSR from 'components/generic/NoSSR'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
}

Router.onRouteChangeComplete = () => console.log(`loaded`)

class IndexPage extends Component {
  render () {
    return <div><NoSSR onSSR={<DataLoading />} /><RecipeListContainer /></div>
  }
}

export default page()(IndexPage)
