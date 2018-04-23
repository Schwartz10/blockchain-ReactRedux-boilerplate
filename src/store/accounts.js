/**
 * INITIAL STATE
 */
const defaultAccount = null;

/**
 * ACTION TYPES
 */
const GET_ACCOUNT = 'GET_ACCOUNTS';

/**
 * ACTION CREATORS
 */
export const setAccount = account => ({type: GET_ACCOUNT, account})

/**
 * REDUCER
 */
export default function (state = defaultAccount, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return action.account;
    default:
      return state
  }
}
