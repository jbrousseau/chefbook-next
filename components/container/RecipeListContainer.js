import RecipeCardList from '../presentational/RecipeCardList'
import { gql } from 'react-apollo'
import withGraphql from '../../lib/hoc/withGraphql'
import React from 'react'

const NUMBER_OF_RECIPES_PER_PAGE = 10

class RecipeListContainer extends React.Component {
  componentDidUpdate () {
    if (this.props.data.allRecipes && typeof this.props.onLoad === 'function') {
      this.props.onLoad()
    }
  }

  render () {
    const { data: { allRecipes } } = this.props

    if (allRecipes && allRecipes.totalCount) {
    //  const areMoreRecipes = allRecipes.totalCount < _allRecipesMeta.count
      return (
        <RecipeCardList allRecipes={allRecipes} />
      )
    }
  }
}
const allRecipesQuery = gql`
  query allRecipes($first: Int!, $offset: Int!) {
    allRecipes(orderBy: CREATED_AT_DESC, first: $first, offset: $offset) {
      totalCount
      nodes {
        id
        title
        recipeCategoryByCategoryId{
          label
        }
      }
    }
  }
`

export default withGraphql(allRecipesQuery, {
  options: {
    variables: {
      first: NUMBER_OF_RECIPES_PER_PAGE,
      offset: 0
    }
  }
})(RecipeListContainer)
