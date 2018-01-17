import React, { Component } from 'react'
import { connect } from 'react-redux';
import CapCoinContract from '../build/contracts/CapCoin.json'
import { fetchWeb3 } from './store/web3'
import { fetchContract } from './store/contract'
import Routes from './components/Routes'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    // Get network provider and web3 instance.
    await this.props.getWeb3()
    this.props.getContract(this.props.web3)
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    web3: state.web3,
  }
}

function mapDispatchToProps(dispatch){
  return {
    getWeb3: function (){
      return dispatch(fetchWeb3())
    },
    getContract: function (web3){
      return dispatch(fetchContract(web3))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
