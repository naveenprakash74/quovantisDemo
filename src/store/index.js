/**
 * this file is use to  configre redux store
 */
import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {foodListReducer} from './reducers';

/**here we combile all the reducers */
const rootReducer = combineReducers({
  foodList: foodListReducer,
});

/**here we create store with middleware */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
