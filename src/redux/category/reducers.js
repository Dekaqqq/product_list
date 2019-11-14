import ADD_CATEGORY from './types';

const categoryReducer = (state = '', { type, payload }) => {
    switch (type) {
        case ADD_CATEGORY:
            return payload;
        default:
            return state;
    }
};

export default categoryReducer;
