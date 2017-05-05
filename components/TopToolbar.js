import React from 'react'

import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons/Button'
import Link from 'next/link'

class TopToolbar extends React.Component {
  render () {
    let iconHome = 'restaurant'
    if (this.props.backButton === true) {
      iconHome = 'arrow_back'
    }
    let titleToolBar = 'Chefbook'
    if (this.props.title) {
      titleToolBar = this.props.title
    }
    let actionsToolBar = [<Button icon key='person_pin'>person_pin</Button>]
    if (this.props.search) {
      actionsToolBar.unshift(<Button icon key='search'>search</Button>)
    }

    let params = {
      ...Toolbar.defaultProps,
      ...this.props,
      nav: <Link href='/'><Button icon key='home'>{iconHome}</Button></Link>,
      title: <div>{titleToolBar}</div>,
      actions: actionsToolBar
    }
    delete params.uri
    delete params.backButton
    delete params.search
    return (
      <Toolbar {...params} />
    )
  }
}

TopToolbar.propTypes = Toolbar.propTypes

export default TopToolbar
