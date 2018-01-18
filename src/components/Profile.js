import React from 'react'
import {connect} from 'react-redux'
import LoadingIndicator from 'react-loading-indicator';
import { Link } from 'react-router-dom';

const Profile = props => (
  <div>
    {props.user ?
      <div>
        <h1>Welcome {props.user.name}</h1>
        <h3>You currently have {props.user.coinBalance} Tokens <br />
          <Link to="exchange">Buy More</Link>
        </h3>
      </div>
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
