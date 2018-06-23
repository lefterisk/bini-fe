import {Record as record} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'CurrentSearch',
    field: '',
};

class Search extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(Search, json, {
            field: resolve.with(String)
        });
    }
}

export default Search;
