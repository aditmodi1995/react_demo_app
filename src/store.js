import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  // compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
)

export default store;