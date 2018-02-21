import React, { Component } from 'react'
import { connect } from 'react-redux'

/*
You know you've correctly set up your environment if your simple storage contract is working - you should be able to set and get the value in your smart contract. If not, somethings not right
*/

class SimpleStorage extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 0,
      dirty: false
    }
  }

  componentDidMount(){
    this.setState({ dirty: false })
  }

  componentWillUpdate(nextProps, nextState){
    // checks to see if we've fetched the necessary information from the blockchain
    if (!this.state.dirty && nextProps.accounts.length && Object.keys(nextProps.contract).length) {
      nextProps.contract.get.call(nextProps.accounts[0])
      .then(result => this.setState({ value: result.c[0], dirty: true }))
    }
  }

  addOne(){
    this.props.contract.set(this.state.value + 1, {from: this.props.accounts[0]})
    .then(result => this.setState({ value: this.state.value + 1 }))
  }

  render(){
    return(
      <div>
        <h1>The number stored in your smart contract is: <br /> {this.state.value} </h1>
        <button onClick={this.addOne.bind(this)}>Add One</button>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    contract: state.contract,
    accounts: state.accounts
  }
}

export default connect(mapState)(SimpleStorage)
