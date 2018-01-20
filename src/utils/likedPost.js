const likedPostHelper = {}

likedPostHelper.updateUser = function(state, newPostInfo) {
  let newState = Object.assign({}, state);

  if (newState.address === newPostInfo.liker) {
    newState.coinBalance = newPostInfo.likerCoinbalance
  }

  return newState;
}

likedPostHelper.updatePost = function(state, newPostInfo) {
  let newState = state.slice();

  for (let i = 0; i < newState.length; i++) {
    if (newState[i].address === newPostInfo.poster){
      newState[i].tokenPot = newPostInfo.lotteryAmount;
    }
  }

  return newState;
}

module.exports = likedPostHelper;
