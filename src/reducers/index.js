import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import search from './SearchState';

export default combineReducers({
    router: routerReducer,
    search,
});
