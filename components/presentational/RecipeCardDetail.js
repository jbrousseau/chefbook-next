import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import AlarmIcon from 'material-ui-icons/Alarm'
import WbSunnyIcon from 'material-ui-icons/WbSunny'
import ShoppingBasketIcon from 'material-ui-icons/ShoppingBasket'
import Typography from 'material-ui/Typography';


import Avatar from 'material-ui/Avatar'

const imgSrc = '/static/hamburger.jpg'

export default function RecipeCard (props) {
  const recipe = props.recipe

  return (
    <div className='md-grid' style={{ justifyContent: 'center', maxWidth: 600, height: '100%' }}>
      <div className='md-cell md-cell--12'>
        <CardMedia title={recipe.title} subtitle={recipe.recipeCategoryByCategoryId.label} image={imgSrc} />
        <CardContent>
          <Typography type="headline" component="h2">
            {recipe.title}
          </Typography>
          <Typography component="p">
            {recipe.recipeCategoryByCategoryId.label}
          </Typography>
        </CardContent>
      </div>
      <div className='md-cell md-cell--12'>
        <Card>
          <List>
            <ListItem leftIcon={<AlarmIcon />} primaryText={<div><span className='md-caption'>Temps de préparation : </span><span>{recipe.setupTime} min</span></div>} />
            <ListItem leftIcon={<WbSunnyIcon />} primaryText={<div><span className='md-caption'>Temps de cuisson : </span><span>{recipe.cookTime} min</span></div>} />
          </List>
          <List>
            <ListItemText primary="Ingredients" />
            <Divider inset />
            {recipe.recipeIngredientsByRecipeId.nodes.map((ingredient, index) =>
              <ListItem key={ingredient.id} primaryText={ingredient.quantity + ' ' + ingredient.ingredientByIngredientId.label} leftIcon={<ShoppingBasketIcon />} />
            )}
          </List>
          <List>
            <ListItemText primary="Etapes" />
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
