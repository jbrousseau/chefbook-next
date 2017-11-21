import { Component } from 'react'
import TopToolbar from 'components/presentational/TopToolbar'

export default params => ComposedComponent => class withTopToolbar extends Component {
  constructor (props) {
    super(props)
    this.state = {title: ''}
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad (newTitle) {
    this.setState({title: newTitle})
  }

  render () {
    const backButton = params != null ? params.backButton : false
    return (
      <div>
        <TopToolbar backButton={backButton} title={this.state.title} />
        <ComposedComponent {...this.props} onLoad={this.onLoad} />
      </div>
    )
  }
}
