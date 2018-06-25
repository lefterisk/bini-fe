import { CountriesActionTypes } from '../constants';

import CountriesState from '../records/CountriesState';

export default function CountriesReducer(state = new CountriesState(), action) {
    switch (action.type) {
        case CountriesActionTypes.COUNTRIES_START: {
            state = state.set('loading', true);
            break;
        }
        case CountriesActionTypes.COUNTRIES_SUCCESS: {
            state = state.merge({
                loading: false,
                results: action.results
            });
            break;
        }
        case CountriesActionTypes.COUNTRIES_FAIL: {
            state = state.set('loading', false);
            break;
        }
    }
    return state;
}
