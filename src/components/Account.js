import React from 'react'
import {connect} from 'react-redux'
import Signup from './Signup'
import Profile from './Profile'

const Account = props => (
  <div>
    <h1>Account</h1>
    {props.user && props.user.name ? <Profile /> : <Signup />}
  </div>
  )

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapState, mapDispatch)(Account)
