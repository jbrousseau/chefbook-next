import RecipeCard from './RecipeCard'
import {GridList} from 'material-ui/GridList'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    overflowY: 'auto'
  }
}

export default function RecipeCardList (props) {
  return (
    <div style={styles.root}>
      <GridList
        cols={2}
        cellHeight={200}
        padding={1}
        style={styles.gridList}
      >
        {props.allRecipes.nodes.map((recipe, index) =>
          <RecipeCard key={index} {...recipe} />
        )}
      </GridList>
    </div>
  )
}
