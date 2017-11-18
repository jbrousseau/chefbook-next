import PropTypes from 'prop-types'

const DataError = ({ message }) => <div>{`Error: ${message}`}</div>

DataError.propTypes = {
  message: PropTypes.string.isRequired
}

export default DataError
