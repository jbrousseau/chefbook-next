import App from '../components/App'
import TabPanel from '../components/TabPanel'
import RecipeDetailContainer from '../components/RecipeDetailContainer'

import withData from '../lib/withData'
import React from 'react'

class RecipePage extends React.Component {
  static getInitialProps ({ query: { id }, pathname: uri }) {
    return { id, uri }
  }
  render () {
    return (
      <App>
        <TabPanel tab1Children={<RecipeDetailContainer recipeId={this.props.id} uri={this.props.uri} />} />
      </App>
    )
  }
}

export default withData(RecipePage)
