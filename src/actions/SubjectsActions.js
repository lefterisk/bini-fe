import {SubjectsActionTypes} from '../constants';

import Libraries from '../services/Libraries';

const SubjectsActions = {
    get: () => async dispatch => {
        dispatch({type: SubjectsActionTypes.SUBJECTS_START});
        try {
            const results = await Libraries.get();
            dispatch({type: SubjectsActionTypes.SUBJECTS_SUCCESS, results});
        } catch (err) {
            // HANDLE login FAILURE
            console.log(err);
            dispatch({type: SubjectsActionTypes.SUBJECTS_FAIL});
        }
    }
};

export default SubjectsActions;
