import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import search from './SearchState';
import countries from './Countries';
import cities from './Cities';
import subjects from './Subjects';
import libraries from './Libraries';
import ui from './Ui';
import book from './Book';

export default combineReducers({
    router: routerReducer,
    ui,
    search,
    countries,
    cities,
    libraries,
    subjects,
    book
});
