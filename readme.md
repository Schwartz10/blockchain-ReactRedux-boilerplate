# Boilerplate

### Description

This boilerplate serves as a starting point for developers who wish to combine Truffle, Web3.js, React, Redux, react-redux, and webpack.

## Setup

To use this boilerplate, you'll need to take the following steps:

* Don't fork or clone this repo! Instead, create a new, empty directory on your machine and `git init` (or create an empty repo on Github and clone it to your local machine)
* Run the following commands:

```
git remote add blockchain-React-Redux-boilerplate https://github.com/Schwartz10/blockchain-ReactRedux-boilerplate
git fetch blockchain-React-Redux-boilerplate
git merge blockchain-React-Redux-boilerplate/master
```

Why did we do that? Because every once in a while, `blockchain-React-Redux-boilerplate` may be updated with additional features or bug fixes, and you can easily get those changes from now on by entering:

```
git fetch blockchain-React-Redux-boilerplate
git merge blockchain-React-Redux-boilerplate/master
```
## Using MetaMask versus fallback procedure

The default behavior for this boilerplate uses MetaMask to inject the web3 object into your browser. If you'd prefer to use the fallback procedure, navigate to `src/utils/getWeb3.js` and make sure you set the provider to the correct localhost port where you're hosting your blockchain.

Testing
Run tests - `truffle test`

Running the application
Compile contracts - `truffle compile`
Migrate contracts - `truffle migrate`
Start http server - `npm run start`
