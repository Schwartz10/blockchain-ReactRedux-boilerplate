/**
 * INITIAL STATE
 */
const defaultWeb3 = {};

/**
 * ACTION TYPES
 */
const GET_WEB3 = 'GET_WEB3';

/**
 * ACTION CREATORS
 */
export const setWeb3 = web3 => ({type: GET_WEB3, web3})

/**
 * REDUCER
 */
export default function (state = defaultWeb3, action) {
  switch (action.type) {
    case GET_WEB3:
      return action.web3;
    default:
      return state
  }
}
