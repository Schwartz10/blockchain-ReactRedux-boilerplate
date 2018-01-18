pragma solidity ^0.4.18;

contract CapCoin {

  event NewUser(string name);
  event BoughtTokens(uint coinBalance);

  uint coinSupply = 1000000;
  uint coinsBought = 0;
  uint contractNum;

  function CapCoin () {
    contractNum = 1;
  }

  struct User {
    string name;
    uint coinBalance;
  }

  mapping (address => User) public addressToUser;
  address[] public users;

  function createUser(string name) public {
    var user = addressToUser[msg.sender];

    user.name = name;
    user.coinBalance = 0;

    users.push(msg.sender) -1;
    NewUser(name);
  }

  function getUsers() public view returns (address[]) {
    return users;
  }

  function getUser() public view returns (string, uint) {
    return (addressToUser[msg.sender].name, addressToUser[msg.sender].coinBalance);
  }

  function buyTokens(uint amount) public {
    addressToUser[msg.sender].coinBalance += amount;
    coinsBought += amount;
    coinSupply -= amount;
    BoughtTokens(addressToUser[msg.sender].coinBalance);
  }
}
