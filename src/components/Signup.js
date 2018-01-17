import React, {Component} from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {name: ""}
  }


  componentDidMount () {
    //fetch the account
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render () {
    return (
      <div>
        <h1>Signup</h1>
        <TextField
          hintText="Name"
          value={this.state.name}
          onChange={this.handleChange}
        /><br />
        <RaisedButton
          onClick={(e) =>
          this.props.createUser(e, this.state.name, this.props.contract)}
          label="Create Account" primary={true}
        />
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
    contract: state.contract
  }
}

const mapDispatch = dispatch => {
  return {
    createUser: function(e, name, contract){
      e.preventDefault();
      contract.createUser(name)
      // dispatch(name, contract.createUser);
    }
  }
}

export default connect(mapState, mapDispatch)(Signup)
