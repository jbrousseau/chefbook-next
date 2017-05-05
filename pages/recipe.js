import App from '../components/App'
import TopToolbar from '../components/TopToolbar'
import RecipeDetailContainer from '../components/RecipeDetailContainer'

import withData from '../lib/withData'
import React from 'react'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {title: ''}
    this.onLoad = this.onLoad.bind(this)
  }

  static getInitialProps ({ query: { id }, pathname: uri }) {
    return { id, uri }
  }
  onLoad (newTitle) {
    this.setState({title: newTitle})
  }

  render () {
    return (
      <App>
        <TopToolbar colored component='header' backButton title={this.state.title} />
        <RecipeDetailContainer recipeId={this.props.id} onLoad={this.onLoad} />
      </App>
    )
  }
}

export default withData(RecipePage)
