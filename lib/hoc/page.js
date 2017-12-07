import compose from 'recompose/compose'
// import withAnalytics from './withAnalytics'
// import withAuth from './withAuth'
import withData from './withData'
// import withGraphql from './withGraphql'
// import withIntl from './withIntl'
import withHead from './withHead'
// import withStyle from './withStyle'
import withMaterialDesign from './withMaterialDesign'
import withTopToolbar from './withTopToolbar'
import withLoading from './withLoading'

// NOTE : pure components at the end of compose
export default params => compose(
  withData,
  withMaterialDesign,
  withTopToolbar(params),
  withLoading,
  withHead
//  withGraphql
//  withAuth,
 // withIntl,
//  withAnalytics
)
