import React, {Component} from 'react'
import {connect} from 'react-redux'

const Exchange = props => (
  <div>
    <h1>Buy Tokens</h1>
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

export default connect(mapState, mapDispatch)(Exchange)
