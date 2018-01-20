import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { buyTokens } from '../store/user';

class Exchange extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <h1>Buy InstaCoins</h1>
        <SelectField
          floatingLabelText="Coin Amount"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="1" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={25} primaryText="25" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <RaisedButton
          onClick={(e) =>
          this.props.buyTokens(e, this.state.value, this.props.contract.buyTokens, this.props.accounts[0])}
          label="Buy Tokens" primary={true}
        />
        <h3>You have {this.props.user.coinBalance} Coins</h3>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    contract: state.contract,
    accounts: state.accounts
  }
}

const mapDispatch = (dispatch) => {
  return {
    buyTokens: function(e, amount, contractFunc, account){
      e.preventDefault()
      return dispatch(buyTokens(amount, contractFunc, account))
    }
  }
}

export default connect(mapState, mapDispatch)(Exchange)
