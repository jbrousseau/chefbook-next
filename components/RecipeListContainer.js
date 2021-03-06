import RecipeCard from './RecipeCard'
import CircularProgress from 'react-md/lib/Progress/CircularProgress'
import { gql, graphql } from 'react-apollo'
import React from 'react'

const NUMBER_OF_RECIPES_PER_PAGE = 10

class RecipeListContainer extends React.Component {
  componentDidUpdate () {
    if (this.props.data.allRecipes) {
      this.props.onLoad()
    }
  }

  render () {
    const { data: { loading, error, allRecipes } } = this.props

    if (allRecipes && allRecipes.totalCount) {
    //  const areMoreRecipes = allRecipes.totalCount < _allRecipesMeta.count
      return (
        <div className='md-grid' style={{ justifyContent: 'center', paddingLeft: '0px', paddingRight: '0px' }}>
          {allRecipes.nodes.map((recipe, index) =>
            <RecipeCard key={index} {...recipe} />
        )}
        </div>
      )
    } else if (loading) {
      return <CircularProgress key='progress' id={1} />
    } else if (error) {
      return <div>Error</div>
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

export default graphql(allRecipesQuery, {
  options: {
    variables: {
      first: NUMBER_OF_RECIPES_PER_PAGE,
      offset: 0
    }
  }
})(RecipeListContainer)
