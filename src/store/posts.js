import likedPostHelper from './../utils/likedPost';

/**
 * INITIAL STATE
 */
const defaultPosts = []

/**
 * ACTION TYPES
 */
const CREATE_POST = 'CREATE_POST';
const GET_POSTS = 'GET_POSTS';
const LIKED_POST = 'LIKED_POST';

/**
 * ACTION CREATORS
 */
const createPost = post => ({type: CREATE_POST, post});
const gotPosts = posts => ({type: GET_POSTS, posts});
const likedPost = post => ({type: LIKED_POST, post});

/**
 * THUNK CREATORS
 */

export const post = (url, contractFunc, account, username) =>
  dispatch =>
    contractFunc(url, {from: account})
    .then(res => {
      let newPost = {}
      newPost.postUrl = res.logs[0].args.url;
      newPost.address = account;
      newPost.tokenPot = -5;
      newPost.username = username;
      return dispatch(createPost(newPost));
    })
    .catch(err => console.log(err));

export const fetchPosts = (fetchAddressArray, addressToPostFunc) =>
  dispatch =>
    fetchAddressArray.call()
    .then(res => {
      let addresses = res.map(address => addressToPostFunc(address))
      return Promise.all(addresses)
    })
    .then(posts => {
      let finalArr = posts.map(post => {
        let completedPost = {}
        completedPost.postUrl = post[0];
        completedPost.username = post[1];
        completedPost.tokenPot = post[2].toString(10);
        completedPost.address = post[3];
        return completedPost;
      })
      dispatch(gotPosts(finalArr))
    })
    .catch(err => console.log(err))

  // in process
export const likePost = (postUrl, postAddress, contractFunc, account, reward) =>
  dispatch =>
    contractFunc(postAddress, reward, {from: account})
    .then(res => {
      let postInfo = Object.assign({}, res.logs[0].args);
      postInfo.likerCoinbalance = Number(postInfo.likerCoinbalance.toString(10));
      postInfo.posterCoinbalance = Number(postInfo.posterCoinbalance.toString(10));
      postInfo.lotteryAmount = Number(postInfo.lotteryAmount.toString(10));
      return dispatch(likedPost(postInfo))
    })

/**
 * REDUCER
 */
export default function (state = defaultPosts, action) {
  switch (action.type) {
    case CREATE_POST:
      let posts = state.slice()
      posts.push(action.post)
      return posts;
    case GET_POSTS:
      return action.posts;
    case LIKED_POST:
      return likedPostHelper.updatePost(state, action.post);
    default:
      return state
  }
}
