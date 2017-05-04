import App from '../components/App'
import TabPanel from '../components/TabPanel'
import RecipeDetailContainer from '../components/RecipeDetailContainer'

import withData from '../lib/withData'
import React from 'react'

class RecipePage extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }
  render (props) {
    return (
      <App>
        <TabPanel tab1Children={<RecipeDetailContainer recipeId={props.id} />} />
      </App>
    )
  }
}

export default withData(RecipePage)