import {Record as record, List} from 'immutable';

import {construct, resolve} from '../helpers/mappers';
import Search from "./Search";

const defaults = {
    REC_TYPE: 'CurrentSearch',
    loading: true,
    search: new Search(),
    results: new List()
};

class SearchState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(SearchState, json, {
            loading: resolve.with(Boolean),
            search: resolve.as(Search),
            results: resolve.as(List)
        });
    }
}

export default SearchState;
