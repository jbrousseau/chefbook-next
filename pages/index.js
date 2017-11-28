import RecipeListContainer from '../components/container/RecipeListContainer'
import page from 'lib/hoc/page'
import { Component } from 'react'
import DataLoading from 'components/generic/DataLoading'
import NoSSR from 'components/generic/NoSSR'

class IndexPage extends Component {
  render () {
    return <RecipeListContainer />
  }
}

export default page()(IndexPage)
