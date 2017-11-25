import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import DataError from 'components/generic/DataError'
import DataLoading from 'components/generic/DataLoading'

/*
 * An enhanced Apollo graphql client which first checks for data error and loading states
 */
export default (query, config) => (ComposedComponent, {
  Error = DataError,
  Loading = DataLoading
} = {}) => {
  function WithErrorAndLoading (props) {
    const error = props.data.error
    if (error) {
      console.error(error.message) // eslint-disable-line no-console
      return <Error message={error.message} />
    }
    if (props.data.loading) {
      return <Loading />
    }

    return <ComposedComponent {...props} />
  }

  WithErrorAndLoading.propTypes = {
    data: PropTypes.shape({
      error: PropTypes.object,
      loading: PropTypes.bool
    }).isRequired
  }
  return graphql(query, config)(WithErrorAndLoading)
}
