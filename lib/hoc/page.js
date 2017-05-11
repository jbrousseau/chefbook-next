import { compose } from 'redux'
// import withAnalytics from './withAnalytics'
// import withAuth from './withAuth'
import withData from './withData'
// import withGraphql from './withGraphql'
// import withIntl from './withIntl'
import withHead from './withHead'
// import withStyle from './withStyle'

export default compose(
  withData,
  withHead
//  withGraphql
//  withAuth,
 // withIntl,
//  withAnalytics,
  // withStyle
)
