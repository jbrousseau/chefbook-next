import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui-icons/StarBorder'
import TouchRipple from 'material-ui/ButtonBase/TouchRipple'
import { withStyles } from 'material-ui/styles'
import {Component} from 'react'
import Link from 'next/link'
import { GridListTile, GridListTileBar } from 'material-ui/GridList'
import PropTypes from 'prop-types'

const imgSrc = '/static/fond_chefbook.jpg'

const styles = theme => ({
  title: {
    color: theme.palette.primary[200]
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
})

class RecipeCard extends Component {
  render () {
    const { classes } = this.props
    return (
      <GridListTile key={this.props.id}>
        <img src={imgSrc} alt={this.props.title} />
        <GridListTileBar
          title={this.props.title}
          subtitle={this.props.recipeCategoryByCategoryId.label}
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
        { /* <TouchRipple>
          <Link href={{pathname: 'recipe', query: {id: this.props.id}}} as={`recipe/${this.props.id}`}>
            <img src={imgSrc} />
          </Link>
        </TouchRipple> */ }

        { /*  <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Paper className={classes.paper}>
          <Typography type="headline" component="h3">
            {this.props.title}
          </Typography>

            <Link href={{pathname: 'recipe', query: {id: this.props.id}}} as={`recipe/${this.props.id}`}>
              <img src={imgSrc} />
            </Link>

        </Paper> */ }
      </GridListTile>

    )
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecipeCard)
