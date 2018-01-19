/**
 * INITIAL STATE
 */
const defaultPosts = []

/**
 * ACTION TYPES
 */
const CREATE_POST = 'CREATE_POST';
const GET_POSTS = 'GET_POSTS';

/**
 * ACTION CREATORS
 */
const createPost = post => ({type: CREATE_POST, post});
const getPosts = posts => ({type: GET_POSTS, posts});

/**
 * THUNK CREATORS
 */

export const post = (url, contractFunc, account) =>
  dispatch =>
    contractFunc(url, {from: account})
    .then(res => {
      let newPost = {}
      newPost[account] = res.logs[0].args.url;
      return dispatch(createPost(newPost));
    })
    .catch(err => console.log(err));

export const fetchPosts = contractFunc =>
  dispatch =>
    contractFunc.call()
    .then(res => console.log(res))
    .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultPosts, action) {
  switch (action.type) {
    case CREATE_POST:
      let posts = state.slice()
      posts.push(action.post)
      return posts;
    default:
      return state
  }
}
