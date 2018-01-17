pragma solidity ^0.4.18;

contract CapCoin {
  uint coinSupply = 1000000;
  uint coinsBought = 0;

  // Post to owner mapping
  // caption to owner mapping

  struct User {
    string name;
    uint coinBalance;
  }

  User[] public users;

  mapping (uint => address) public userToOwner;

  function createUser(string name) public {
    uint id = users.push(User(name, 0));
    userToOwner[id] = msg.sender;
  }
}
