import App from '../components/App'
import TabPanel from '../components/TabPanel'
import RecipeListContainer from '../components/RecipeListContainer'
import withData from '../lib/withData'
import React from 'react'

class IndexPage extends React.Component {
  static getInitialProps ({ query: { id }, pathname: uri }) {
    return { id, uri }
  }
  render() {
    return (
      <App>
        <TabPanel tab1Children={<RecipeListContainer />} uri={this.props.uri} />
      </App>
    )
  }
}

export default withData(IndexPage)
