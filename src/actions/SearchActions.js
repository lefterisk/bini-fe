import {SearchActionTypes} from '../constants';

import Search from '../services/BookSearch';

const SearchActions = {
    search: (search) => async dispatch => {
        dispatch({type: SearchActionTypes.SEARCH_START, search});

        try {
            const {results} = await Search.search(search);
            dispatch({type: SearchActionTypes.SEARCH_SUCCESS, results});
        } catch (err) {
            // HANDLE login FAILURE
            console.log(err);
            dispatch({type: SearchActionTypes.SEARCH_FAIL});
        }
    }
};

export default SearchActions;
