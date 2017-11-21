import TopToolbar from '../components/presentational/TopToolbar'
// import LoginContainer from '../components/container/LoginContainer'

import page from '../lib/hoc/page'
import React from 'react'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {title: ''}
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad (newTitle) {
    this.setState({title: newTitle})
  }

  render () {
    return (
      <div>
        <TopToolbar colored component='header' backButton title='Login' />

      </div>
    )
  }
}
// <LoginContainer />
export default page()(RecipePage)
