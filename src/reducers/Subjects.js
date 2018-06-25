import {SubjectsActionTypes} from '../constants';

import SubjectsState from '../records/SubjectsState';

export default function SubjectsReducer (state = new SubjectsState(), action) {
    switch (action.type) {
        case SubjectsActionTypes.SUBJECTS_START: {
            state = state.set('loading', true);
            break;
        }
        case SubjectsActionTypes.SUBJECTS_SUCCESS: {
            state = state.merge({
                loading: false,
                results: action.results
            });
            break;
        }
        case SubjectsActionTypes.SUBJECTS_FAIL: {
            state = state.set('loading', false);
            break;
        }
    }
    return state;
}
