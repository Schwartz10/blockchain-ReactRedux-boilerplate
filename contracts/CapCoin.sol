pragma solidity ^0.4.18;

contract CapCoin {

  event NewUser(string name);
  event BoughtTokens(uint coinBalance);
  event CreatedPost(string url);

  uint coinSupply = 1000000;
  uint coinsBought = 0;
  uint contractNum;

  function CapCoin () {
    contractNum = 1;
  }

  struct User {
    string name;
    uint coinBalance;
    uint postNum;
  }

  struct Post {
    string url;
    string userName;
    uint lotteryAmount;
    string[] captions;
  }

  mapping (address => User) public addressToUser;
  mapping (address => Post) public addressToPost;
  address[] public users;
  address[] public posts;

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

  function getUser() public view returns (string, uint, string, uint) {
    return (addressToUser[msg.sender].name,
      addressToUser[msg.sender].coinBalance,
      addressToPost[msg.sender].url,
      addressToPost[msg.sender].lotteryAmount);
  }

  function buyTokens(uint amount) public {
    addressToUser[msg.sender].coinBalance += amount;
    coinsBought += amount;
    coinSupply -= amount;
    BoughtTokens(addressToUser[msg.sender].coinBalance);
  }

  function createPost(string url) public {
    // 5 coins per post
    var post = addressToPost[msg.sender];
    post.url = url;
    post.lotteryAmount = 5;
    post.userName = addressToUser[msg.sender].name;

    posts.push(msg.sender) -1;
    addressToUser[msg.sender].coinBalance -= 5;
    CreatedPost(url);
  }

  function getPosts() public view returns (address[]) {
      return posts;
  }

  function seed(string name, string url, uint amount) public {
      createUser(name);
      buyTokens(amount);
      createPost(url);
  }

  function() internal payable {}
}
