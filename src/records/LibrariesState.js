import {Record as record, List} from 'immutable';

import {construct, resolve} from '../helpers/mappers';

const defaults = {
    REC_TYPE: 'LibrariesState',
    loading: false,
    loaded: false,
    results: new List()
};

class LibrariesState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(LibrariesState, json, {
            loading: resolve.with(Boolean),
            results: resolve.as(List)
        });
    }
}

export default LibrariesState;
