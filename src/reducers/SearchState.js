import { SearchActionTypes } from '../constants';

import SearchState from '../records/SearchState';

export default function SearchStateReducer(state = new SearchState(), action) {
    switch (action.type) {
        case SearchActionTypes.SEARCH_START: {
            state = state.merge({
                loading: true,
                search: action.search
            });
            break;
        }
        case SearchActionTypes.SEARCH_SUCCESS: {
            state = state.set('loading', false);
            break;
        }
        case SearchActionTypes.SEARCH_FAIL: {
            state = state.set('loading', false);
            break;
        }
    }
    return state;
}
