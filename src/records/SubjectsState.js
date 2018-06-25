import {Record as record, List} from 'immutable';

import {construct, resolve} from '../helpers/mappers';
import Search from "./Search";

const defaults = {
    REC_TYPE: 'SubjectsState',
    loading: false,
    loaded: false,
    results: new List()
};

class SubjectsState extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(SubjectsState, json, {
            loading: resolve.with(Boolean),
            results: resolve.as(List)
        });
    }
}

export default SubjectsState;
