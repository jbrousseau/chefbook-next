import React from 'react'
import { gql, graphql } from 'react-apollo'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.logout = () => {
      App.logout() // or whatever else your logout flow is
      .then(() =>
        props.client.resetStore()
      )
      .catch(err =>
        console.error('Logout failed', err)
      )
    }
  }
  render () {
    const { loading, currentUser } = this.props
    if (loading) {
      return (
        <p className='navbar-text navbar-right'>
          Loading...
        </p>
      )
    } else if (currentUser) {
      return (
        <span>
          <p className='navbar-text navbar-right'>
            {currentUser.login}
            &nbsp;
            <button onClick={this.logout}>Log out</button>
          </p>
        </span>
      )
    }
    return (
      <p className='navbar-text navbar-right'>
        <a href='/login/github'>Log in with GitHub</a>
      </p>
    )
  }
}

const PROFILE_QUERY = gql`
  query CurrentUserForLayout {
    currentUser {
      login
      avatar_url
    }
  }
`

export default graphql(PROFILE_QUERY, {
  options: { forceFetch: true },
  props: ({ data: { loading, currentUser } }) => ({
    loading, currentUser
  })
})(Profile)
