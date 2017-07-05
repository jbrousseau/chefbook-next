import { gql } from 'react-apollo'
import withGraphql from '../../lib/hoc/withGraphql'
import RecipeCardDetail from '../presentational/RecipeCardDetail'

import {Component} from 'react'

class RecipeDetailContainer extends Component {
  componentDidUpdate () {
    if (this.props.data.recipe) {
      this.props.onLoad(this.props.data.recipe.title)
    }
  }

  render () {
    const recipe = this.props.data.recipe
    if (recipe) {
      //  const areMoreRecipes = allRecipes.totalCount < _allRecipesMeta.count
      return (<RecipeCardDetail recipe={recipe} />)
    }
  }
}

const recipeDetailQuery = gql`
  query recipeDetail($id: ID!) {
    recipe(id: $id) {
      title
      cookTime
      setupTime
      score
      likeCount
      recipeCategoryByCategoryId {
        label
      }
      recipeIngredientsByRecipeId {
        nodes {
          id
          quantity
          ingredientByIngredientId {
            label
          }
        }
      }
      recipeStepsByRecipeId {
        nodes {
          id
          body
        }
      }
    }
  }
`

export default withGraphql(recipeDetailQuery, {
  options: (props) => ({
    variables: {
      id: props.recipeId
    }
  })
})(RecipeDetailContainer)
