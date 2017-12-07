import RecipeListContainer from '../components/container/RecipeListContainer'
import page from 'lib/hoc/page'
import { Component } from 'react'

class IndexPage extends Component {
  render () {
    return <RecipeListContainer />
  }
}

export default page()(IndexPage)
