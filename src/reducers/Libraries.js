import { LibrariesActionTypes } from '../constants';

import LibrariesState from '../records/LibrariesState';

export default function LibrariesReducer(state = new LibrariesState(), action) {
    switch (action.type) {
        case LibrariesActionTypes.LIBRARIES_START: {
            state = state.set('loading', true);
            break;
        }
        case LibrariesActionTypes.LIBRARIES_SUCCESS: {
            state = state.merge({
                loading: false,
                results: action.results
            });
            break;
        }
        case LibrariesActionTypes.LIBRARIES_FAIL: {
            state = state.set('loading', false);
            break;
        }
    }
    return state;
}
