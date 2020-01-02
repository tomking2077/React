import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


/*
1. In order to wire up a redux/react app, we need react-redux.
    We need the Provide reactComponent to be around everything!
*/
import { Provider } from 'react-redux';

//2. Create redux store so redux exists and provider has a store!
import { createStore } from 'redux';

//3. Reducers to populate store
//3a. We always start with a rootReducers
//4. Make individual reducers to hand to the root reducer (3)
import rootReducer from './reducers/rootReducer';

//5. Create the store (2) by passing it the root reducer, which is made up of the reducers
const theStore = createStore(rootReducer);


ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
