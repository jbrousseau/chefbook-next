import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Button from 'react-md/lib/Buttons/Button'
import Link from 'next/link'

const imgSrc = '/static/fond_chefbook.jpg'

export default function RecipeCard (props) {
  return (
    <Card className='md-cell md-cell--3'>
      <Link href={{pathname: 'recipe', query: {id: props.id}}}>
        <Media >
          <img src={imgSrc} role='presentation' />
          <MediaOverlay>
            <CardTitle title={props.title} subtitle={props.recipeCategoryByCategoryId.label}>
              <Button className='md-cell--right' icon>favorites</Button>
            </CardTitle>
          </MediaOverlay>
        </Media>
      </Link>
    </Card>
  )
}
