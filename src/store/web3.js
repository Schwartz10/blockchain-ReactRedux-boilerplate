import getWeb3 from '../utils/getWeb3'

/**
 * INITIAL STATE
 */
const defaultWeb3 = {}

/**
 * ACTION TYPES
 */
const GET_WEB3 = 'GET_WEB3';

/**
 * ACTION CREATORS
 */
const setWeb3 = web3 => ({type: GET_WEB3, web3})
/**
 * THUNK CREATORS
 */

export const fetchWeb3 = ()  =>
  dispatch =>
    getWeb3
    .then(results => dispatch(setWeb3(results.web3)))
    .catch(() => console.log('error fetching web3'))

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
