import { ADD_PRODUCT, FETCH_PRODUCTS } from './types';

const productsReducers = (state = [], { type, payload }) => {
    switch (type) {
        case FETCH_PRODUCTS:
            return state;
        case ADD_PRODUCT:
            return payload;
        default:
            return state;
    }
};

export default productsReducers;
