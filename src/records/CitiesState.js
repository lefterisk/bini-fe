import {Record as record, List} from 'immutable';

import {construct, resolve} from '../helpers/mappers';
import Search from "./Search";

const defaults = {
    REC_TYPE: 'CitiesState',
    loading: false,
    loaded: false,
    results: new List()
};

class CitiesState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(CitiesState, json, {
            loading: resolve.with(Boolean),
            results: resolve.as(List)
        });
    }
}

export default CitiesState;
