import { gql, graphql } from 'react-apollo'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Card from 'react-md/lib/Cards/Card'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Button from 'react-md/lib/Buttons/Button'
import CircularProgress from 'react-md/lib/Progress/CircularProgress'
import CardText from 'react-md/lib/Cards/CardText'
import FontIcon from 'react-md/lib/FontIcons'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Subheader from 'react-md/lib/Subheaders'
import Divider from 'react-md/lib/Dividers'

import React from 'react'

const imgSrc = '/static/hamburger.jpg'

class RecipeDetail extends React.Component {
  componentDidUpdate (prevProps, prevState) {
    if (this.props.data.recipe) {
      this.props.onLoad(this.props.data.recipe.title)
      console.log('yooo')
    }
  }

  render () {
    const recipe = this.props.data.recipe
    if (recipe) {
      //  const areMoreRecipes = allRecipes.totalCount < _allRecipesMeta.count
      return (
        <div className='md-grid' style={{ justifyContent: 'center', maxWidth: 600, height: '100%' }}>
          <div className='md-cell md-cell--12'>
            <Media aspectRatio='4-3'>
              <img src={imgSrc} role='presentation' />
              <MediaOverlay>
                <CardTitle title={recipe.title} subtitle={recipe.recipeCategoryByCategoryId.label}>
                  <Button className='md-cell--right' icon>favorites</Button>
                </CardTitle>
              </MediaOverlay>
            </Media>
          </div>
          <div className='md-cell md-cell--12'>
            <Card>
              <List ordered>
                <ListItem leftIcon={<FontIcon>alarm</FontIcon>} primaryText={<div><span className='md-caption'>Temps de préparation : </span><span>{recipe.setupTime} min</span></div>} />
                <ListItem leftIcon={<FontIcon>wb_sunny</FontIcon>} primaryText={<div><span className='md-caption'>Temps de cuisson : </span><span>{recipe.cookTime} min</span></div>} />
              </List>
              <List ordered>
                <Subheader primary primaryText='Ingredients' inset />
                <Divider inset />
                {recipe.recipeIngredientsByRecipeId.nodes.map((ingredient, index) =>
                  <ListItem key={ingredient.id} primaryText={ingredient.quantity + ' ' + ingredient.ingredientByIngredientId.label} />
                )}
              </List>
            </Card>
          </div>
          <div className='md-cell md-cell--12'>
            <Card>
              <List ordered>
                <Subheader primary primaryText='Etapes' inset />
                <Divider inset />
                {recipe.recipeStepsByRecipeId.nodes.map((step, index) =>
                  <ListItem key={step.id} primaryText={step.body} />
                )}
              </List>
            </Card>
          </div>
        </div>
      )
    }
    return <CircularProgress key='progress' id={1} />
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

export default graphql(recipeDetailQuery, {
  options: (props) => ({
    variables: {
      id: props.recipeId
    }
  })
})(RecipeDetail)
