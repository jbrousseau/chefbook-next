import RecipeDetailContainer from 'components/container/RecipeDetailContainer'

import page from 'lib/hoc/page'
import React from 'react'

class RecipePage extends React.Component {
  render () {
    return (
      <RecipeDetailContainer recipeId={this.props.url.query.id} {...this.props} />
    )
  }
}

export default page({backButton: true})(RecipePage)
