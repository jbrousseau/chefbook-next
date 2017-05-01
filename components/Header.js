import { TabsContainer, Tabs, Tab } from 'react-md/lib/Tabs'
import FontIcon from 'react-md/lib/FontIcons'
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Button from 'react-md/lib/Buttons/Button';

import LoremIpsum from './LoremIpsum'
import BaseToolbar from './BaseToolbar'

const recipes = <FontIcon>kitchen</FontIcon>
const favorites = <FontIcon style={{ width: 24 }}>favorites</FontIcon> // it's 48 for some reason
const shoppingbasket = <FontIcon>shopping_basket</FontIcon>

const imgSrc = "/static/fond_chefbook.jpg"

export default function IconTabs (props) {
  return (
    <div>
      <TabsContainer toolbar={<BaseToolbar component="div" />} colored panelClassName="md-grid chefbook-tab-content">
        <Tabs tabId="chefbook-stuffs">
          <Tab label="Recettes" icon={recipes}>
            <Card  className="md-cell md-cell--3">
              <Media >
                <img src={imgSrc} role="presentation" />
                <MediaOverlay>
                  <CardTitle title="Poulet au cury" subtitle="Plat principal">
                    <Button className="md-cell--right" icon>star_outline</Button>
                  </CardTitle>
                </MediaOverlay>
              </Media>
            </Card>
            <Card  className="md-cell md-cell--3">
              <Media >
                <img src={imgSrc} role="presentation" />
                <MediaOverlay>
                  <CardTitle title="Poulet au cury" subtitle="Plat principal">
                    <Button className="md-cell--right" icon>star_outline</Button>
                  </CardTitle>
                </MediaOverlay>
              </Media>
            </Card>
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
