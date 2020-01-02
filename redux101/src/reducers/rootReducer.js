//this is the root reducer (store manager for all reducers)
// to make a rootreducer:
//1. Get a method called combineReducers from redux
import { combineReducers } from 'redux';
//2. Get each individual reducer
import frozenReducer from './frozenReducer';
import produceReducer from './produceReducer';
import meatReducer from './meatReducer';

//3. Call combineReducers and give it an object
//each key will be the value of that piece of state in the redux store
//each value will be the value of that piece of state in the redux store
const rootReducer = combineReducers({
    frozen: frozenReducer,
    produce: produceReducer,
    meat: meatReducer,
});

export default rootReducer;