var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var CapCoin = artifacts.require("./CapCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
};

module.exports = function(deployer) {
  deployer.deploy(CapCoin);
};
