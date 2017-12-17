import Card, { CardContent, CardMedia } from 'material-ui/Card'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import AlarmIcon from 'material-ui-icons/Alarm'
import WbSunnyIcon from 'material-ui-icons/WbSunny'
import ShoppingBasketIcon from 'material-ui-icons/ShoppingBasket'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import {Component} from 'react'

const imgSrc = '/static/hamburger.jpg'

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
})

class RecipeCard extends Component {
  render () {
    const { classes } = this.props
    const { recipe } = this.props

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia title={recipe.title} subtitle={recipe.recipeCategoryByCategoryId.label} image={imgSrc} className={classes.media} />
          <CardContent>
            <Typography type='headline' component='h2'>
              {recipe.title}
            </Typography>
            <Typography component='p'>
              {recipe.recipeCategoryByCategoryId.label}
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AlarmIcon />
              </ListItemIcon>
              <ListItemText primary={<div><span className='md-caption'>Temps de préparation : </span><span>{recipe.setupTime} min</span></div>} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WbSunnyIcon />
              </ListItemIcon>
              <ListItemText primary={<div><span className='md-caption'>Temps de cuisson : </span><span>{recipe.cookTime} min</span></div>} />
            </ListItem>
          </List>
          <List>
            <ListItemText primary='Ingredients' />
            <Divider inset />
            {recipe.recipeIngredientsByRecipeId.nodes.map((ingredient, index) =>
              <ListItem key={ingredient.id} >
                <ListItemIcon>
                  <ShoppingBasketIcon />
                </ListItemIcon>
                <ListItemText primary={ingredient.quantity + ' ' + ingredient.ingredientByIngredientId.label} />
              </ListItem>
            )}
          </List>
          <List>
            <ListItemText primary='Etapes' />
            <Divider inset />
            {recipe.recipeStepsByRecipeId.nodes.map((step, index) =>
              <ListItem key={step.id} >
                <ListItemIcon>
                  <Avatar>{index + 1}</Avatar>
                </ListItemIcon>
                <ListItemText primary={step.body} />
              </ListItem>
            )}
          </List>
        </Card>
      </div>
    )
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecipeCard)
