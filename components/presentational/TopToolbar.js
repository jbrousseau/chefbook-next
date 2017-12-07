import React from 'react'

import IconButton from 'material-ui/IconButton'
import Link from 'next/link'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'

import RestaurantIcon from 'material-ui-icons/Restaurant'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  appBar: {
    marginBottom: '10px'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
})

class TopToolbar extends React.Component {
  render () {
    const iconColor = 'primary'
    const { classes } = this.props
    let iconHome = <RestaurantIcon color={iconColor} />
    if (this.props.backButton === true) {
      iconHome = <ArrowBackIcon color={iconColor} />
    }
    let titleToolBar = 'Chefbook'
    if (this.props.title) {
      titleToolBar = this.props.title
    }

    return (

      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Link href='/'>
            <IconButton className={classes.menuButton} color='contrast' aria-label='Menu'>
              {iconHome}
            </IconButton>
          </Link>
          <Typography type='title' color='inherit' className={classes.flex}>
            {titleToolBar}
          </Typography>
          <Button color='contrast'>Login</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

TopToolbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopToolbar)
