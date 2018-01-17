import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import singleOrder from './order'
// import categories from './categories'


// export const reducer = combineReducers({user, products, product, cart, users, orders, singleOrder, categories})
// const middleware = composeWithDevTools(applyMiddleware(
//   thunkMiddleware,
//   createLogger({collapsed: true})
// ))
// const store = createStore(reducer, middleware)

// export default store
// export * from './user'
