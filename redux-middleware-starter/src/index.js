import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

const middleware = [reduxPromise, reduxThunk];

//const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);
const middlewareApplied = applyMiddleware(...middleware);
const storeWithMiddleware = middlewareApplied(createStore);
const finalStore = storeWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store={finalStore}>
        <App />,
    </Provider>,
    document.getElementById('root')
);

