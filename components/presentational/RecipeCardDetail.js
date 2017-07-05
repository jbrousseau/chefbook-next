import {Card, CardMedia, CardTitle} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import AlarmIcon from 'material-ui/svg-icons/action/alarm'
import WbSunnyIcon from 'material-ui/svg-icons/image/wb-sunny'
import ShoppingBasketIcon from 'material-ui/svg-icons/action/shopping-basket'
import Avatar from 'material-ui/Avatar'

const imgSrc = '/static/hamburger.jpg'

export default function RecipeCard (props) {
  const recipe = props.recipe

  return (
    <div className='md-grid' style={{ justifyContent: 'center', maxWidth: 600, height: '100%' }}>
      <div className='md-cell md-cell--12'>
        <CardMedia overlay={<CardTitle title={recipe.title} subtitle={recipe.recipeCategoryByCategoryId.label} />} >
          <img src={imgSrc} role='presentation' />
        </CardMedia>
      </div>
      <div className='md-cell md-cell--12'>
        <Card>
          <List>
            <ListItem leftIcon={<AlarmIcon />} primaryText={<div><span className='md-caption'>Temps de préparation : </span><span>{recipe.setupTime} min</span></div>} />
            <ListItem leftIcon={<WbSunnyIcon />} primaryText={<div><span className='md-caption'>Temps de cuisson : </span><span>{recipe.cookTime} min</span></div>} />
          </List>
          <List>
            <Subheader inset>Ingredients</Subheader>
            <Divider inset />
            {recipe.recipeIngredientsByRecipeId.nodes.map((ingredient, index) =>
              <ListItem key={ingredient.id} primaryText={ingredient.quantity + ' ' + ingredient.ingredientByIngredientId.label} leftIcon={<ShoppingBasketIcon />} />
            )}
          </List>
          <List>
            <Subheader inset>Etapes</Subheader>
            <Divider inset />
            {recipe.recipeStepsByRecipeId.nodes.map((step, index) =>
              <ListItem key={step.id} primaryText={step.body} leftAvatar={<Avatar>{index + 1}</Avatar>} />
            )}
          </List>
        </Card>
      </div>
    </div>
  )
}
