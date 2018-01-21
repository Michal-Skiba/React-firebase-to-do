import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';



import reducer from './store/reducer';

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
