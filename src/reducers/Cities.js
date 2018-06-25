import { CitiesActionTypes } from '../constants';

import CitiesState from '../records/CitiesState';

export default function CitiesReducer(state = new CitiesState(), action) {
    switch (action.type) {
        case CitiesActionTypes.CITIES_START: {
            state = state.set('loading', true);
            break;
        }
        case CitiesActionTypes.CITIES_SUCCESS: {
            state = state.merge({
                loading: false,
                results: action.results
            });
            break;
        }
        case CitiesActionTypes.CITIES_FAIL: {
            state = state.set('loading', false);
            break;
        }
    }
    return state;
}
