import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Button from 'react-md/lib/Buttons/Button';

const imgSrc = "/static/fond_chefbook.jpg"

export default function RecipeCard (props) {
  return (
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
  )
}