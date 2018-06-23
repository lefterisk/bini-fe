import {createMiddleware} from 'redux-beacon';
import {LOCATION_CHANGE} from 'react-router-redux';
import GoogleTagManager from '@redux-beacon/google-tag-manager';

const eventsMap = {
    [LOCATION_CHANGE]: (action) => {
        return {
            event: 'pageview',
            page: action.payload.pathname
        };
    },
};

const gtm = GoogleTagManager();
export default createMiddleware(eventsMap, gtm);
