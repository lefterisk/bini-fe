import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';
import Book from "./Book";

const defaults = {
    REC_TYPE: 'BookState',
    loading: false,
    failed: false,
    book: null
};

class BookState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(BookState, json, {
            loading: resolve.with(Boolean),
            book: resolve.as(Book)
        });
    }
}

export default BookState;
