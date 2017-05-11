import App from '../components/App'
import TabPanel from '../components/TabPanel'

import page from '../lib/hoc/page'
import React from 'react'

class IndexPage extends React.Component {
  render () {
    return <TabPanel uri={this.props.url.query.id} />
  }
}

export default page(IndexPage)
