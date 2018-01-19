/**
 * INITIAL STATE
 */
const defaultPosts = []

/**
 * ACTION TYPES
 */
const CREATE_POST = 'CREATE_POST';

/**
 * ACTION CREATORS
 */
const createPost = post => ({type: CREATE_POST, post})

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
