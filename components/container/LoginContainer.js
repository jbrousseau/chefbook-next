import TextField from 'react-md/lib/TextFields'
import FontIcon from 'react-md/lib/FontIcons'
import Button from 'react-md/lib/Buttons/Button'
import { gql, graphql } from 'react-apollo'
import React from 'react'

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.mutate({
      variables: {
        email: 'kaustin3@nyu.edu',
        password: 'jQZ8mYjUNH'
      }
    })
      .then(({ data }) => {
        console.log('got data', data.authenticate.jwtToken)
      }).catch((error) => {
        console.log('there was an error sending the query', error)
      })
  }

  render () {
    return (<div
      className='md-grid'
        >
      <div className='md-cell md-cell--12' />
      <TextField
        id='floatingEmail'
        label='Enter your Email'
        leftIcon={<FontIcon>email</FontIcon>}
        className='md-cell md-cell--4-offset md-cell--4 md-cell--bottom'
            />
      <TextField
        id='floatingPassword'
        label='Enter your password'
        leftIcon={<FontIcon>lock</FontIcon>}
        type='password'
        size={10}
        className='md-cell md-cell--4-offset md-cell--4 md-cell--bottom'
            />
      <div className='md-cell md-cell--12' />
      <Button raised primary label='Login'
        className='md-cell md-cell--4-offset md-cell--4 md-cell--bottom'
        onClick={this.onClick}
          />
    </div>)
  }
}
const authenticateMutation = gql`
  mutation authenticateMutation ($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    jwtToken

  }
}
`

export default graphql(authenticateMutation)(LoginContainer)
