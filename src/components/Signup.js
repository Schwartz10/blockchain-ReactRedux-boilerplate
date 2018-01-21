import React, {Component} from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { addUser } from '../store/user'

class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {name: ""}
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render () {
    return (
      <div className="single-page-container">
        <h1>Signup</h1>
        <div className="action-container">
          <TextField
            className="action-item"
            hintText="Name"
            value={this.state.name}
            onChange={this.handleChange}
          /><br />
          <RaisedButton
            className="action-item"
            onClick={(e) =>
            this.props.createUser(e, this.state.name, this.props.contract, this.props.accounts[0])}
            label="Create Account" primary={true}
          />
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    web3: state.web3,
    contract: state.contract,
    accounts: state.accounts
  }
}

const mapDispatch = dispatch => {
  return {
    createUser: function(e, name, contract, account){
      e.preventDefault();
      dispatch(addUser(name, contract.createUser, account));
    }
  }
}

export default connect(mapState, mapDispatch)(Signup)
