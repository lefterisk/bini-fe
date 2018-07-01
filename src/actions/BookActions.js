import {BookActionTypes} from '../constants';

import Search from '../services/BookSearch';

const BookActions = {
    get: (bookId) => async dispatch => {
        dispatch({type: BookActionTypes.GET_BOOK_START});
        try {
            const book = await Search.get(bookId);
            dispatch({type: BookActionTypes.GET_BOOK_SUCCESS, book});
        } catch (err) {
            console.log(err);
            dispatch({type: BookActionTypes.GET_BOOK_FAIL});
        }
    }
};

export default BookActions;
