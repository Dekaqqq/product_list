import SHOW_ERROR from './types';

const errorReducer = (state = false, { type, payload }) => {
    switch (type) {
        case SHOW_ERROR:
            return payload;
        default:
            return state;
    }
};

export default errorReducer;
