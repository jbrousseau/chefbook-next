import RecipeCard from './RecipeCard'
import { gql, graphql } from 'react-apollo'


function RecipeList ({ data: { allRecipes, loading, _allRecipesMeta }, loadMoreRecipes }) {
  
   if (allRecipes && allRecipes.length) {
    const areMoreRecipes = allRecipes.length < _allRecipesMeta.count
    return (
      <div className='md-grid' style={{ justifyContent: 'center' }}>
      {allRecipes.map((recipe, index) =>
          <RecipeCard />
      )}
      </div>
    )
  }
  return <div>Loading</div>
}

const allRecipesQuery = gql`
  query allRecipes($first: Int!) {
    allRecipes(orderBy: CREATED_AT_DESC, first: $first) {
      totalCount
      edges {
        cursor
      }
      nodes {
        title
        authorId
        
      }
    }
  }
` 

export default graphql(allRecipesQuery, {
  options: {
    variables: {
      first: 0
    }
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allRecipes.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allRecipes: [...previousResult.allRecipes, ...fetchMoreResult.allRecipes]
          })
        }
      })
    }
  })
})(RecipeList)