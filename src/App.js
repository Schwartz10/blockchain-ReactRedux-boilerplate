import React, { Component } from 'react'
import CapCoinContract from '../build/contracts/CapCoin.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Main from './components/Routes'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null,
      contract: {}
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const capCoin = contract(CapCoinContract)
    capCoin.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var capCoinInstance;

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      capCoin.deployed().then((instance) => {
        capCoinInstance = instance

        // Stores a given value, 5 by default.
        this.setState({contract: capCoinInstance});
        console.log(instance)
      })

      // .then((result) => {
      //   // Get the value from the contract to prove it worked.
      //   return capCoinInstance.get.call(accounts[0])
      // }).then((result) => {
      //   // Update state with the result.
      //   return this.setState({ storageValue: result.c[0] })
      // })
    })
  }

  render() {
    return (
      <div className="App">
        {/*<Main />*/}
      </div>
    );
  }
}

export default App
