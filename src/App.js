import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchWeb3 } from './store/web3'
import { fetchContract } from './store/contract'
import { fetchAccounts } from './store/accounts';
import Routes from './components/Routes'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  componentDidMount = () => this.collectBlockchainInfo();

  collectBlockchainInfo = async () => {
    const { getContract, getAccounts } = this.props;
    // Get network provider, web3, and truffle contract instance and store them on state.
    const { web3 } = await this.props.getWeb3();
    getContract(web3);
    getAccounts(web3);
  }

  render() {
    return (
      <div className="App">
          <Routes />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    getWeb3: () => dispatch(fetchWeb3()),
    getContract: (web3) => dispatch(fetchContract(web3)),
    getAccounts: (web3) => dispatch(fetchAccounts(web3))
  }
}

export default connect(null, mapDispatchToProps)(App);
