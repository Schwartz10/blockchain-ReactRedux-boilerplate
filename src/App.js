import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchWeb3 } from './store/web3'
import { fetchContract } from './store/contract'
import { fetchAccounts } from './store/accounts';
import { fetchUser } from './store/user'
import Routes from './components/Routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.collectBlockchainInfo = this.collectBlockchainInfo.bind(this)
  }

  componentWillMount() {
    this.collectBlockchainInfo()
    .then(() => {
      this.props.findUser(this.props.contract.getUser, this.props.accounts[0])
    })
  }

  async collectBlockchainInfo() {
    // Get network provider, web3, and truffle contract instance and store them on state.
    return Promise.all([await this.props.getWeb3(),
     this.props.getContract(this.props.web3),
     this.props.getAccounts(this.props.web3)])
  }


  render() {
    return (
      <div className="App">
        <MuiThemeProvider >
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    web3: state.web3,
    contract: state.contract,
    accounts: state.accounts
  }
}

function mapDispatchToProps(dispatch){
  return {
    getWeb3: function (){
      return dispatch(fetchWeb3());
    },
    getContract: function (web3){
      return dispatch(fetchContract(web3));
    },
    getAccounts: function (web3){
      return dispatch(fetchAccounts(web3));
    },
    findUser: function (contractFunc, account){
      return dispatch(fetchUser(contractFunc, account));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
