import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import Web3Manager from './web3/Web3Manager';
import SimpleStorageContract from '../build/contracts/SimpleStorage';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Web3Manager
        contract={SimpleStorageContract}
        interval={100}
      />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
