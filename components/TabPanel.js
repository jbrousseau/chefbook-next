import { TabsContainer, Tabs, Tab } from 'react-md/lib/Tabs'
import FontIcon from 'react-md/lib/FontIcons'

import LoremIpsum from './LoremIpsum'
import TopToolbar from './TopToolbar'
import React from 'react'

import RecipeListContainer from './RecipeListContainer'

const recipes = <FontIcon>kitchen</FontIcon>
const favorites = <FontIcon style={{ width: 24 }}>favorites</FontIcon> // it's 48 for some reason
const shoppingbasket = <FontIcon>shopping_basket</FontIcon>

export default class TabPanel extends React.Component {
  constructor (props) {
    super(props)
    this.setTabsContainer = this.setTabsContainer.bind(this)
    this.forceHeightCalculation = this.forceHeightCalculation.bind(this)
  }
  setTabsContainer (tabsContainer) {
    this.tabsContainer = tabsContainer
  }
  forceHeightCalculation () {
    if (this.tabsContainer) {
      this.tabsContainer.forceUpdate()
    }
  }
  render () {
    return (
      <div>
        <TabsContainer toolbar={<TopToolbar component='header' search />} colored panelClassName='chefbook-tab-content' ref={this.setTabsContainer}>
          <Tabs tabId='chefbook-stuffs'>
            <Tab label='Recettes' icon={recipes}>
              <RecipeListContainer onLoad={this.forceHeightCalculation} />
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
}
