import {GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import TouchRipple from 'material-ui/internal/TouchRipple'

import Link from 'next/link'

const imgSrc = '/static/hamburger.jpg'

export default function RecipeCard (props) {
  return (
    <GridTile
      key={props.id}
      title={props.title}
      subtitle={props.recipeCategoryByCategoryId.label}
      actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
      actionPosition='left'
      titlePosition='top'
      titleBackground='linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
          >
      <TouchRipple>
        <Link href={{pathname: 'recipe', query: {id: props.id}}}>
          <img src={imgSrc} />
        </Link>
      </TouchRipple>
    </GridTile>
  )
}
