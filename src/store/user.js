import likedPostHelper from './../utils/likedPost';

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';
const BUY_TOKENS = 'BUY_TOKENS';
const LIKED_POST = 'LIKED_POST'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const createUser = user => ({type: CREATE_USER, user})
const boughtTokens = amount => ({type: BUY_TOKENS, amount})
const likedPost = post => ({type: LIKED_POST, post});

/**
 * THUNK CREATORS
 */
export const fetchUser = (contractFunc, account)  =>
  dispatch =>
    contractFunc.call({from: account})
    .then(res => {
      let user = {}
      user.name = res[0];
      user.coinBalance = Number(res[1].toString(10));
      user.postUrl = res[2];
      user.postLottery = Number(res[3].toString(10));
      user.address = res[4];
      return dispatch(getUser(user))
    })
    .catch(err => console.log(err))

export const addUser = (name, contractFunc, account) =>
  dispatch =>
    contractFunc(name, {from: account})
    .then(res => dispatch(createUser(res.logs[0].args)))
    .catch(err => console.log(err));

export const buyTokens = (amount, contractFunc, account) =>
  dispatch =>
    contractFunc(amount, {from: account})
    .then(res => dispatch(boughtTokens(res.logs[0].args.coinBalance.c[0])))
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case CREATE_USER:
      return action.user;
    case BUY_TOKENS:
      return Object.assign({}, state, {coinBalance: action.amount});
    case LIKED_POST:
      return likedPostHelper.updateUser(state, action.post);
    default:
      return state
  }
}
