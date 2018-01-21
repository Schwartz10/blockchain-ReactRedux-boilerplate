import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { buyTokens, cashOut } from '../store/user';
import TextField from 'material-ui/TextField';

class Exchange extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 1, cashOutAmount: ""};
  }

  handleChange = (event, index, value) => this.setState({value});
  handleCashOutTextChange = (event) => this.setState({cashOutAmount: event.target.value})

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
          this.props.buyTokens(e, this.state.value, this.props.contract.buyTokens, this.props.accounts[0], this.props.web3.toWei)}
          label="Buy Tokens" primary={true}
        />
        <h3>You have {this.props.user.coinBalance} Coins</h3><br />
        {this.props.user.coinBalance > 0 &&
          <div>
            <TextField
              hintText="Cash Out Amount"
              value={this.state.cashOutAmount}
              onChange={this.handleCashOutTextChange}
            /><br />
            <RaisedButton
            disabled={Number(this.state.cashOutAmount) <= 0}
            onClick={(e) =>
            this.props.cashOut(e, Number(this.state.cashOutAmount - 1), this.props.contract.cashOut, this.props.accounts[0], this.props.web3.toWei)}
            label="Cash Out" primary={true}
            />
            <p>*NOTE: There is a 1 coin fee for cashing out*</p>
          </div>
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    web3: state.web3,
    user: state.user,
    contract: state.contract,
    accounts: state.accounts
  }
}

const mapDispatch = (dispatch) => {
  return {
    buyTokens: function(e, amount, contractFunc, account, conversionFunc){
      e.preventDefault()
      return dispatch(buyTokens(amount, contractFunc, account, conversionFunc));
    },
    cashOut: function(e, amount, contractFunc, account, conversionFunc) {
      e.preventDefault()
      return dispatch(cashOut(amount, contractFunc, account, conversionFunc));
    }
  }
}

export default connect(mapState, mapDispatch)(Exchange)
