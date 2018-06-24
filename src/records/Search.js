import {Record as record, List} from 'immutable';
import qs from 'qs';
import _ from 'lodash';

import {construct, resolve} from '../helpers/mappers';
import {FilterTypes} from "../constants";

const defaults = {
    REC_TYPE: 'CurrentSearch',
    filters: new List(),
};

class Search extends record(defaults) {
    static fromJSON(json = {}) {
        return construct(Search, json, {
            filters: resolve.as(List)
        });
    }

    addFilter(filter) {
        return new Search({
            filters: this.filters.push(filter)
        });
    }

    removeFilter(filterType) {
        return new Search({
            filters: this.filters.filter(filter => filter.type !== filterType)
        });
    }

    getCondensedFilters () {
        const filters = {};
        this.filters.map(filter => {
            if (filters[filter.type]) {
                filters[filter.type].values.push(filter.value)
            } else {
                filters[filter.type] = {
                    type: filter.type,
                    values: [filter.value]
                }
            }
        });

        return  _.keys(filters).map(filter => filters[filter]);
    }

    toQuery() {
        const params = {};

        this.filters.map(filter => {
            if (filter) {
                if (!params[filter.type]) {
                    params[filter.type] = filter.value.replace(' ', '%20');
                } else {
                    params[filter.type] = `${params[filter.type]}|${filter.value.replace(' ', '%20')}`;
                }
            }
        });

        return qs.stringify(params, {encode: false});
    }

    static fromQuery(query) {
        let filters = new List();
        const queryObj = qs.parse(query);
        _.keys(queryObj).map(key => {
            queryObj[key].split('|').map(filter => {
                filters = filters.push({
                    type: key,
                    value: filter
                });
            });
        });

        return new Search({
            filters
        });
    }
}

export default Search;
