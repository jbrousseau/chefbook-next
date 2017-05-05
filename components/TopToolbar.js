import React from 'react'

import Toolbar from 'react-md/lib/Toolbars'
import Button from 'react-md/lib/Buttons/Button'
import Link from 'next/link'

class TopToolbar extends React.Component {

  render() {
    let iconHome = 'arrow_back'
    if (this.props.uri === '/') {
      iconHome = 'restaurant'
    }
    let titleApp = 'Chefbook'


    let params = {
      ...Toolbar.defaultProps,
      ...this.props,
      nav: <Link href='/'><Button icon key='home'>{iconHome}</Button></Link>,
      title: <div>{titleApp}</div>,
      actions: [
        <Button icon key='search'>search</Button>,
        <Button icon key='person_pin'>person_pin</Button>
      ]
    }
    delete params.uri;
    return (
      <Toolbar {...params} />
    )
  }
}

TopToolbar.propTypes = Toolbar.propTypes


export default TopToolbar
