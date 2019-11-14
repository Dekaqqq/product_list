import ADD_VALUE from './types';

const valueReducer = (state = '', { type, payload }) => {
    switch (type) {
        case ADD_VALUE:
            return payload;
        default:
            return state;
    }
};

export default valueReducer;
