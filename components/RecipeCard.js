import CardTitle from 'react-md/lib/Cards/CardTitle'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Button from 'react-md/lib/Buttons/Button'
import Link from 'next/link'
import injectInk from 'react-md/lib/Inks'
import Paper from 'react-md/lib/Papers'

const imgSrc = '/static/hamburger.jpg'

function RecipeCard (props) {
  return (
    <div className='md-cell md-cell--2-phone md-cell--4-tablet md-cell--3-desktop'>
      <Link href={{pathname: 'recipe', query: {id: props.id}}}>
        <Media aspectRatio='4-3'>
          <img src={imgSrc} role='presentation' />
          <MediaOverlay>
            <CardTitle title={props.title} subtitle={props.recipeCategoryByCategoryId.label}>
              <Button className='md-cell--right' icon>favorites</Button>
            </CardTitle>
          </MediaOverlay>
        </Media>
      </Link>
      <style jsx>{`
      div:hover {
        cursor: pointer;
      }
    `}</style>
      {props.ink}
    </div>
  )
}

export default injectInk(RecipeCard)
