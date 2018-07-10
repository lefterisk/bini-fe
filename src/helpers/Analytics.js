import {createMiddleware} from 'redux-beacon';
import {LOCATION_CHANGE} from 'react-router-redux';
import googleTagManager from '@redux-beacon/google-tag-manager';

const eventsMap = {
    [LOCATION_CHANGE]: (action) => {
        return {
            event: 'pageview',
            page: action.payload.pathname
        };
    },
};

const gtm = googleTagManager();
export default createMiddleware(eventsMap, gtm);
