import React from 'react'
import {connect} from 'react-redux'
import LoadingIndicator from 'react-loading-indicator';
import { Link } from 'react-router-dom';

const Profile = props => (
  <div id="profile-info">
    {props.user ?
      <div>
        <div id="accont-info-top" className="centered-text" >
          <h1>Welcome {props.user.name}</h1>
          <p>address: {props.user.address}</p>
        </div>
        <div id='account-info-bottom'>
          <h3 id='profilepage-token-info'>You currently have {props.user.coinBalance} Tokens </h3>
          <Link to="exchange">Buy More</Link>
        </div>
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

export default connect(mapState)(Profile)
