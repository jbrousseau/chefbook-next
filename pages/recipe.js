import RecipeDetailContainer from '../components/container/RecipeDetailContainer'

import page from '../lib/hoc/page'
import React from 'react'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {title: ''}
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad (newTitle) {
    this.setState({title: newTitle})
  }

  render () {
    return (
      <RecipeDetailContainer recipeId={this.props.url.query.id} onLoad={this.onLoad} />
    )
  }
}

export default page(RecipePage)
