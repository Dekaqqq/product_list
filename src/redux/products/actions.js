import { ADD_PRODUCT, FETCH_PRODUCTS } from './types';

export const addProducts = products => ({
    type: ADD_PRODUCT,
    payload: products,
});

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
});
