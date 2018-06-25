import {LibrariesActionTypes} from '../constants';

import Libraries from '../services/Libraries';

const LibrariesActions = {
    get: () => async dispatch => {
        dispatch({type: LibrariesActionTypes.LIBRARIES_START});
        try {
            const results = await Libraries.get();
            dispatch({type: LibrariesActionTypes.LIBRARIES_SUCCESS, results});
        } catch (err) {
            // HANDLE login FAILURE
            console.log(err);
            dispatch({type: LibrariesActionTypes.LIBRARIES_FAIL});
        }
    }
};

export default LibrariesActions;
