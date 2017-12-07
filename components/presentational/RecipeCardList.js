import RecipeCard from './RecipeCard'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import { withStyles } from 'material-ui/styles'
import withWidth from 'material-ui/utils/withWidth'
import compose from 'recompose/compose'
import {Component} from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui-icons/StarBorder'
import TouchRipple from 'material-ui/ButtonBase/TouchRipple'
import Link from 'next/link'

const styles = theme => ({
  root: {
    /*display: 'flex',*/
    /* retour à la ligne auto */
    /*flexWrap: 'wrap',*/
   /* justifyContent: 'space-around',*/
    /* scrolling uniquement vertical */
    overflow: 'hidden',
    /* paddingTop: '10px', */
    background: theme.palette.background.paper
  },
  gridList: {
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.palette.primary[200]
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
})

const imgSrc = '/static/fond_chefbook.jpg'

class RecipeCardList extends Component {
  render () {
    const { classes } = this.props
    const { width } = this.props
    let numberOfCols = 2
    if (width == 'xl') {
      numberOfCols = 5
    } else if (width == 'lg') {
      numberOfCols = 4
    } else if (width == 'md') {
      numberOfCols = 3
    } else if (width == 'sm') {
      numberOfCols = 2
    } else if (width == 'xs') {
      numberOfCols = 1
    }
    console.log(width)
    return (
      <div className={classes.root}>
        <GridList cellHeight={300} spacing={2} className={classes.gridList} cols={numberOfCols}>
          {this.props.allRecipes.nodes.map((recipe, index) =>
            <GridListTile key={index}>
              <Link href={{pathname: 'recipe', query: {id: recipe.id}}} as={`recipe/${recipe.id}`}>
                <img src={imgSrc} alt={recipe.title}/>
              </Link>
              <GridListTileBar
                title={recipe.title}
                subtitle={recipe.recipeCategoryByCategoryId.label}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                actionIcon={
                  <IconButton>
                    <StarBorder className={classes.title} />
                  </IconButton>
              }
            />
            </GridListTile>
            )}

        </GridList>
      </div>
    )
  }
}

RecipeCardList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default compose(withStyles(styles), withWidth())(RecipeCardList)
