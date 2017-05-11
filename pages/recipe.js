import TopToolbar from '../components/TopToolbar'
import RecipeDetailContainer from '../components/RecipeDetailContainer'

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
      <div>
        <TopToolbar colored component='header' backButton title={this.state.title} />
        <RecipeDetailContainer recipeId={this.props.url.query.id} onLoad={this.onLoad} />
      </div>
    )
  }
}

export default page(RecipePage)
