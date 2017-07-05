import { Component } from 'react'
import TopToolbar from '../../components/presentational/TopToolbar'

export default ComposedComponent => class withTopToolbar extends Component {
  constructor (props) {
    super(props)
    this.state = {title: ''}
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad (newTitle) {
    this.setState({title: newTitle})
  }

  render () {
    const { backButton } = this.props

    return (
      <div>
        <TopToolbar backButton={backButton} title={this.state.title} />
        <ComposedComponent {...this.props} />
      </div>
    )
  }
}
