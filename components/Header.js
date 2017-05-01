import { TabsContainer, Tabs, Tab } from 'react-md/lib/Tabs'
import FontIcon from 'react-md/lib/FontIcons'


import LoremIpsum from './LoremIpsum'
import BaseToolbar from './BaseToolbar'
import Recipes from './Recipes'

const recipes = <FontIcon>kitchen</FontIcon>
const favorites = <FontIcon style={{ width: 24 }}>favorites</FontIcon> // it's 48 for some reason
const shoppingbasket = <FontIcon>shopping_basket</FontIcon>



export default function IconTabs (props) {
  return (
    <div>
      <TabsContainer toolbar={<BaseToolbar component="div" />} colored panelClassName="md-grid chefbook-tab-content">
        <Tabs tabId="chefbook-stuffs">
          <Tab label="Recettes" icon={recipes}>
            <Recipes />
          </Tab>
          <Tab label="Favoris" icon={favorites}>
            <LoremIpsum count={20} paragraphClassName="md-cell md-cell--12 md-text-container" />
          </Tab>
          <Tab label="Courses" icon={shoppingbasket}>
            <LoremIpsum count={20} paragraphClassName="md-cell md-cell--12 md-text-container" />
          </Tab>
        </Tabs>
      </TabsContainer>
    </div>
  )
}
