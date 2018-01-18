pragma solidity ^0.4.18;

contract CapCoin {

  event NewUser(uint userId, string name);

  uint coinSupply = 1000000;
  uint coinsBought = 0;

  struct User {
    string name;
    uint coinBalance;
  }

  User[] public users;

  mapping (uint => address) public userToOwner;

  function createUser(string name) public {
    uint id = users.push(User(name, 0));
    userToOwner[id] = msg.sender;
    NewUser(id, name);
  }
}
