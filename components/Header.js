import { TabsContainer, Tabs, Tab } from 'react-md/lib/Tabs'
import FontIcon from 'react-md/lib/FontIcons'

import LoremIpsum from './LoremIpsum'

const phone = <FontIcon>phone</FontIcon>
const favorites = <FontIcon style={{ width: 24 }}>favorites</FontIcon> // it's 48 for some reason
const nearby = <FontIcon>person</FontIcon>


export default function IconTabs (props) {
  return (
    <div>
      <TabsContainer toolbar={false} colored panelClassName="md-grid phone-tab-content">
        <Tabs tabId="phone-stuffs">
          <Tab label="Recents" icon={phone}>
            <LoremIpsum count={20} paragraphClassName="md-cell md-cell--12 md-text-container" />
          </Tab>
          <Tab label="Favorites" icon={favorites}>
            <LoremIpsum count={20} paragraphClassName="md-cell md-cell--12 md-text-container" />
          </Tab>
          <Tab label="Nearby" icon={nearby}>
            <LoremIpsum count={20} paragraphClassName="md-cell md-cell--12 md-text-container" />
          </Tab>
        </Tabs>
      </TabsContainer>
    </div>
  )
}
