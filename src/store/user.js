import history from '../history'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER';
const CREATE_USER = 'CREATE_USER';

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const createUser = user => ({type: CREATE_USER, user})
/**
 * THUNK CREATORS
 */

export const fetchUser = (userAddress)  => {}
export const addUser = (name, userAddress) => {}


/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case CREATE_USER:
      return action.user;
    default:
      return state
  }
}
