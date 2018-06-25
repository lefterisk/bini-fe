import {CountriesActionTypes} from '../constants';

import Countries from '../services/Countries';

const CountriesActions = {
    get: () => async dispatch => {
        dispatch({type: CountriesActionTypes.COUNTRIES_START});
        try {
            const results = await Countries.get();
            dispatch({type: CountriesActionTypes.COUNTRIES_SUCCESS, results});
        } catch (err) {
            // HANDLE login FAILURE
            console.log(err);
            dispatch({type: CountriesActionTypes.COUNTRIES_FAIL});
        }
    }
};

export default CountriesActions;
