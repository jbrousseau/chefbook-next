import App from '../components/App'
import TabPanel from '../components/TabPanel'
import RecipeListContainer from '../components/RecipeListContainer'
import withData from '../lib/withData'

export default withData(() => (
  <App>
    <TabPanel tab1Children={<RecipeListContainer />} />
  </App>
))
