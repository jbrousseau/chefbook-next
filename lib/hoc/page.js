import { compose } from 'redux'
// import withAnalytics from './withAnalytics'
// import withAuth from './withAuth'
import withData from './withData'
// import withGraphql from './withGraphql'
// import withIntl from './withIntl'
import withHead from './withHead'
// import withStyle from './withStyle'
import withMaterialDesign from './withMaterialDesign'
import withTopToolbar from './withTopToolbar'

// NOTE : pure components at the end of compose
export default compose(
  withData,
  withMaterialDesign,
  withTopToolbar,
  withHead
//  withGraphql
//  withAuth,
 // withIntl,
//  withAnalytics,
  // withStyle
)
