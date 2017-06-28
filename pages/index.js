import TopToolbar from '../components/TopToolbar'
import TabPanel from '../components/TabPanel'

import page from '../lib/hoc/page'
import React from 'react'

class IndexPage extends React.Component {
  render () {
    return <div><TopToolbar component='header' search /><TabPanel uri={this.props.url.query.id} /></div>
  }
}

export default page(IndexPage)
