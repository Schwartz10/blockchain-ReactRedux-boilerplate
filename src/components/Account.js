import React, {Component} from 'react'
import {connect} from 'react-redux'

export default class Account extends Component {
  componentDidMount () {
    //fetch the account
  }

  render () {
    return (
      <div>
        <h1>Accounts</h1>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = (state) => {
//   return {}
// }

// const mapDispatch = (dispatch) => {
//   return {}
// }

// export default connect(mapState, mapDispatch)(Account)
