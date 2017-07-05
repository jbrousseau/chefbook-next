import React from 'react'

import IconButton from 'material-ui/IconButton'
import Link from 'next/link'
import AppBar from 'material-ui/AppBar'
import muiThemeable from 'material-ui/styles/muiThemeable'

import RestaurantIcon from 'material-ui/svg-icons/maps/restaurant'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'

class TopToolbar extends React.Component {
  render () {
    const iconColor = this.props.muiTheme.palette.canvasColor
    let iconHome = <RestaurantIcon color={iconColor} />
    if (this.props.backButton === true) {
      iconHome = <ArrowBackIcon color={iconColor} />
    }
    let titleToolBar = 'Chefbook'
    if (this.props.title) {
      titleToolBar = this.props.title
    }
   /* let actionsToolBar = [<Link href='/login'><Button icon key='person_pin' className='md-btn--toolbar'>person_pin</Button></Link>]
    if (this.props.search) {
      actionsToolBar.unshift(<Button icon key='search'>search</Button>)
    }

    let params = {
      ...Toolbar.defaultProps,
      ...this.props,
      nav: <Link href='/'><Button icon key='home' className='md-btn--toolbar'>{iconHome}</Button></Link>,
      title: <div>{titleToolBar}</div>,
      actions: actionsToolBar
    }
    delete params.backButton
    delete params.search */
    return (
      <AppBar
        title={titleToolBar}
        iconElementLeft={<IconButton>{iconHome}</IconButton>}
      />
    )
  }
}

export default muiThemeable()(TopToolbar)
