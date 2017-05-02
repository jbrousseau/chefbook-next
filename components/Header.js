import { TabsContainer, Tabs, Tab } from 'react-md/lib/Tabs'
import FontIcon from 'react-md/lib/FontIcons'

import LoremIpsum from './LoremIpsum'
import TopToolbar from './TopToolbar'
import RecipeList from './RecipeList'

const recipes = <FontIcon>kitchen</FontIcon>
const favorites = <FontIcon style={{ width: 24 }}>favorites</FontIcon> // it's 48 for some reason
const shoppingbasket = <FontIcon>shopping_basket</FontIcon>

export default function IconTabs (props) {
  return (
    <div>
      <TabsContainer toolbar={<TopToolbar component='div' />} colored panelClassName='chefbook-tab-content'>
        <Tabs tabId='chefbook-stuffs'>
          <Tab label='Recettes' icon={recipes}>
            <RecipeList />
          </Tab>
          <Tab label='Favoris' icon={favorites}>
            <LoremIpsum count={20} paragraphClassName='md-cell md-cell--12 md-text-container' />
          </Tab>
          <Tab label='Courses' icon={shoppingbasket}>
            <LoremIpsum count={20} paragraphClassName='md-cell md-cell--12 md-text-container' />
          </Tab>
        </Tabs>
      </TabsContainer>
    </div>
  )
}
