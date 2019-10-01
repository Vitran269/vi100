import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from './reducers/index';
import thunk from 'redux-thunk';

var store = createStore(myReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>

            </App>
        </Router>
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
