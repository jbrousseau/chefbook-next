import App from '../components/App'
import TopToolbar from '../components/TopToolbar'
import TextField from 'react-md/lib/TextFields'
import FontIcon from 'react-md/lib/FontIcons'
import Paper from 'react-md/lib/Papers'
import Button from 'react-md/lib/Buttons/Button'

import withData from '../lib/withData'
import React from 'react'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {title: ''}
    this.onLoad = this.onLoad.bind(this)
  }

  static getInitialProps ({ query: { id }, pathname: uri }) {
    return { id, uri }
  }
  onLoad (newTitle) {
    this.setState({title: newTitle})
  }

  render () {
    return (
      <App>
        <TopToolbar colored component='header' backButton title='Login' />
        <div
          className='md-grid'
        >
          <div className='md-cell md-cell--12' />
          <TextField
            id='floatingEmail'
            label='Enter your Email'
            leftIcon={<FontIcon>email</FontIcon>}
            className='md-cell md-cell--4-offset md-cell--4 md-cell--bottom'
            />
          <TextField
            id='floatingPassword'
            label='Enter your password'
            leftIcon={<FontIcon>lock</FontIcon>}
            type='password'
            size={10}
            className='md-cell md-cell--4-offset md-cell--4 md-cell--bottom'
            />
          <div className='md-cell md-cell--12' />
          <Button raised primary label='Login'
            className='md-cell md-cell--4-offset md-cell--4 md-cell--bottom'
          />
        </div>
      </App>
    )
  }
}

export default withData(RecipePage)
