import RecipeCard from './RecipeCard'
import { gql, graphql } from 'react-apollo'

const NUMBER_OF_RECIPES_PER_PAGE = 10

function RecipeDetail ({ data: { recipeDetail } }) {
  if (recipeDetail) {
  //  const areMoreRecipes = allRecipes.totalCount < _allRecipesMeta.count
    return (
      <div className='md-grid' style={{ justifyContent: 'center' }}>
        {recipeDetail.title}
      </div>
    )
  }
  return <div>Loading</div>
}

const recipeDetailQuery = gql`
  query recipeDetail($id: Int!) {
      recipe(id:$id) {
      title
      recipeCategoryByCategoryId {
        label
      }
    }
  }
`

export default graphql(recipeDetailQuery, {
  options: {
    variables: {
      id: NUMBER_OF_RECIPES_PER_PAGE,
      offset: 0
    }
  },
  props: ({ data }) => ({
    data
  })
})(RecipeDetail)
