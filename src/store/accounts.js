/**
 * INITIAL STATE
 */
const defaultAccounts = []

/**
 * ACTION TYPES
 */
const GET_ACCOUNTS = 'GET_ACCOUNTS';

/**
 * ACTION CREATORS
 */
const setAccounts = accounts => ({type: GET_ACCOUNTS, accounts})

/**
 * THUNK CREATORS
 */
export const fetchAccounts = web3  => {
    return dispatch =>
      web3.eth.getAccounts((err, accounts) => dispatch(setAccounts(accounts)))
}

/**
 * REDUCER
 */
export default function (state = defaultAccounts, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.accounts;
    default:
      return state
  }
}
