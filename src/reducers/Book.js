import { BookActionTypes } from '../constants';

import BookState from '../records/BookState';

export default function BookReducer(state = new BookState(), action) {
    switch (action.type) {
        case BookActionTypes.GET_BOOK_START: {
            state = state.merge({
                loading: true,
                failed: false
            });
            break;
        }
        case BookActionTypes.GET_BOOK_SUCCESS: {
            state = state.merge({
                loading: false,
                book: action.book
            });
            break;
        }
        case BookActionTypes.GET_BOOK_FAIL: {
            state = state.merge({
                loading: false,
                failed: true
            });
            break;
        }
    }
    return state;
}
