import React, {Component} from 'react'
import {connect} from 'react-redux'
import Signup from './Signup'

class Account extends Component {
  componentDidMount () {
    //fetch the account
  }

  render () {
    return (
      <div>
        <h1>Account</h1>
        <Signup />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect(mapState, mapDispatch)(Account)
