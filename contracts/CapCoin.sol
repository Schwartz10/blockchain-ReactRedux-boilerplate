pragma solidity ^0.4.18;

contract CapCoin {

  event NewUser(string name);
  event BoughtTokens(uint coinBalance);
  event CreatedPost(string url);
  event LikedPost(uint lotteryAmount, string posterName,
    address poster, uint posterCoinbalance, string likerName,
    address liker, uint likerCoinbalance);

  uint coinSupply = 1000000;
  uint coinsBought = 0;

  struct User {
    string name;
    uint coinBalance;
  }

  struct Post {
    string url;
    string userName;
    uint lotteryAmount;
    address owner;
  }

  mapping (address => User) public addressToUser;
  mapping (address => Post) public addressToPost;
  address[] public posts;

  function createUser(string name) public {
    var user = addressToUser[msg.sender];
    user.name = name;
    user.coinBalance = 0;
    NewUser(name);
  }

  function getUser() public view returns (string, uint, string, uint, address) {
    return (addressToUser[msg.sender].name,
      addressToUser[msg.sender].coinBalance,
      addressToPost[msg.sender].url,
      addressToPost[msg.sender].lotteryAmount,
      msg.sender);
  }

  // need to add economics
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
    post.lotteryAmount -= 5;
    post.userName = addressToUser[msg.sender].name;
    post.owner = msg.sender;

    posts.push(msg.sender) -1;
    addressToUser[msg.sender].coinBalance -= 5;
    CreatedPost(url);
  }

  function likePost(address post, uint amount) public {
    addressToPost[post].lotteryAmount += amount;
    addressToUser[post].coinBalance += amount;
    addressToUser[msg.sender].coinBalance -= amount;
    LikedPost(addressToPost[post].lotteryAmount,
      addressToUser[post].name, post, addressToUser[post].coinBalance,
      addressToUser[msg.sender].name, msg.sender, addressToUser[msg.sender].coinBalance);
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
