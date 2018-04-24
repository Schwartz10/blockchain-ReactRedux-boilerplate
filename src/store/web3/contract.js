import Truffle from 'truffle-contract';

let configuredContract;
export const initializeContract = (contract, web3) => {
  // configures contract using truffle and current provider
  if (!configuredContract){
    configuredContract = Truffle(contract);
    configuredContract.setProvider(web3.currentProvider);
  };
};

/**
 * INITIAL STATE
 */
const defaultContract = {}

/**
 * ACTION TYPES
 */
const GOT_CONTRACT = 'GOT_CONTRACT';
const LOADING_CONTRACT = 'LOADING_CONTRACT';

/**
 * ACTION CREATORS
 */
const setContract = contract => ({type: GOT_CONTRACT, contract})
const loadingContract = contract => ({type: LOADING_CONTRACT, contract})

/**
 * THUNK CREATORS
 */
export const fetchContract = () => async dispatch => {
  dispatch(loadingContract('Loading contract'))
  // returns a promise to avoid any race conditions on initial price fetch
  const deployedContract = await configuredContract.deployed();
  dispatch(setContract(deployedContract));
}

/**
 * REDUCER
 */
export default function (state = defaultContract, action) {
  switch (action.type) {
    case GOT_CONTRACT:
      return action.contract;
    case LOADING_CONTRACT:
      return action.contract;
    default:
      return state
  }
}
