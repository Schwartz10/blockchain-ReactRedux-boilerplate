import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import Web3Manager from './web3/Web3Manager';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Web3Manager />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
