const SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};

// this syntax will allow you to migrate your contracts to the blockchain in the truffle config file, by running truffle migrate
