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
const LIKED_POST = 'LIKED_POST';
const CREATE_POST = 'CREATE_POST';
const CASHED_OUT = 'CASHED_OUT';

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const createUser = user => ({type: CREATE_USER, user})
const boughtTokens = amount => ({type: BUY_TOKENS, amount})
const cashedOut = amount => ({type: CASHED_OUT, amount})

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
    .then(res => {
      let newUser = Object.assign({}, res.logs[0].args);
      newUser.coinBalance = 0;
      newUser.postUrl = "";
      newUser.postLottery = "";
      newUser.address = account;
      dispatch(createUser(newUser));
    })
    .catch(err => console.log(err));

export const buyTokens = (amount, contractFunc, account, conversionFunc) =>
  dispatch =>
    contractFunc(amount, {from: account, gas: 1000000, value: conversionFunc(amount/10, 'ether')})
    .then(res => dispatch(boughtTokens(res.logs[0].args.coinBalance.c[0])))
    .catch(err => console.log(err));

export const cashOut = (amount, contractFunc, account, conversionFunc) =>
  dispatch =>
    contractFunc(conversionFunc(amount/10, 'ether'), amount, {from: account, gas: 1000000})
    .then(res => dispatch(cashedOut(res.logs[0].args.newCoinbalance.c[0])))
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
    case CREATE_POST:
      let updatedUser = Object.assign({}, state)
      updatedUser.postUrl = action.post.postUrl;
      updatedUser.postLottery = action.post.tokenPot;
      updatedUser.coinBalance -= 5;
      return updatedUser;
    case CASHED_OUT:
      return Object.assign({}, state, {coinBalance: action.amount - 1});
    default:
      return state
  }
}
