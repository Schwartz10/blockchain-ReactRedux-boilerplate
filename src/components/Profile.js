import React from 'react'
import {connect} from 'react-redux'
import LoadingIndicator from 'react-loading-indicator';

const Profile = props => (
  <div>
    {props.user ?
      <h1>Welcome {props.user.name}</h1>
      :
      <LoadingIndicator />
    }
  </div>
  )

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    contract: state.contract
  }
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapState, mapDispatch)(Profile)
