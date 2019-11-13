import SHOW_ERROR from './types';

const errorReducer = (state = false, { type }) => {
    switch (type) {
        case SHOW_ERROR:
            return true;
        default:
            return state;
    }
};

export default errorReducer;
