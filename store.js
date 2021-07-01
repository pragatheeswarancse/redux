import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


function counterReducer(state = { users: [] }, action) {
    switch (action.type) {
      case 'ADD_USER':
        return { users: [action.payload] }
      default:
        return state
    }
  }

  const middleware = [thunk]


let store = createStore(counterReducer,composeWithDevTools(applyMiddleware(...middleware)))


export default store