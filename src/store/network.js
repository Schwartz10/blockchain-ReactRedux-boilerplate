/**
 * INITIAL STATE
 */
const defaultNetwork = false;

/**
 * ACTION TYPES
 */
const GET_NETWORK = 'GET_NETWORK';

/**
 * ACTION CREATORS
 */
// receives true if the user is on a valid network, false if not
export const setValidNetwork = bool => ({type: GET_NETWORK, bool});

/**
 * REDUCER
 */
export default function (state = defaultNetwork, action) {
  switch (action.type) {
    case GET_NETWORK:
      return action.bool;
    default:
      return state
  }
}
