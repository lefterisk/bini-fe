import { TrackingActionTypes } from '../constants';

const TrackingActions = {
    checkoutLoaded: () => async dispatch => {
        dispatch({type: TrackingActionTypes.CHECKOUT_LOADED});
    },
    purchase: () => async dispatch => {
        dispatch({type: TrackingActionTypes.PURCHASE});
    },

    confirmPayment: () => async dispatch => {
        dispatch({type: TrackingActionTypes.PAYMENT_CONFIRMATION});
    },
};

export default TrackingActions;
