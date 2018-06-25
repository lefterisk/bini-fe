import {CitiesActionTypes} from '../constants';

import Cities from '../services/Cities';

const CitiesActions = {
    get: () => async dispatch => {
        dispatch({type: CitiesActionTypes.CITIES_START});
        try {
            const results = await Cities.get();
            dispatch({type: CitiesActionTypes.CITIES_SUCCESS, results});
        } catch (err) {
            // HANDLE login FAILURE
            console.log(err);
            dispatch({type: CitiesActionTypes.CITIES_FAIL});
        }
    }
};

export default CitiesActions;
