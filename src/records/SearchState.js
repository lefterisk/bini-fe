import {Record as record, List} from 'immutable';

import {construct, resolve} from '../helpers/mappers';
import Search from "./Search";

const defaults = {
    REC_TYPE: 'SearchState',
    loading: true,
    search: new Search(),
    results: new List(),
    itemsCount: 0
};

class SearchState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(SearchState, json, {
            loading: resolve.with(Boolean),
            search: resolve.as(Search),
            results: resolve.as(List),
            itemsCount: resolve.with(Number),
        });
    }
}

export default SearchState;
