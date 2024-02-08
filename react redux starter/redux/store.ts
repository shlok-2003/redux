import { createStore } from 'redux';
import * as actionType from './actionType';

const reducer = (state = 0, action: any) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return state + 1;
        case actionType.DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
