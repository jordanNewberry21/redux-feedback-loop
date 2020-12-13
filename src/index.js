import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const formInputs = (state=[], action) => {
    if (action.type === 'INPUT_FORM') {
        return [...state, action.payload]
    } else if (action.type === 'RESET') {
        return state=[];
    } else if (action.type === 'CHANGE_LAST') {
        // let itemIndex = state.length-1;
        return state.filter((item, index) => index !== action.payload);
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
       formInputs,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
