import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers';

import gaMiddleware from './helpers/Analytics';

export const history = createHistory();

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, gaMiddleware, routerMiddleware(history)))
);
