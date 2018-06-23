import {Record as record} from 'immutable';

const defaults = {
    REC_TYPE: 'Config',
    api: 'http://localhost:3000',
};

export default class Config extends record(defaults) {}
