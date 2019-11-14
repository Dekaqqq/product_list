import { put, call, takeEvery } from 'redux-saga/effects';
import { loaderOn, loaderOff } from './loading';
import { fetchData } from '../services/fetchData';
import { showError } from './error';

// actionsTypes

export const ADD_PRODUCT = 'productList/products/ADD_PRODUCT';
export const FETCH_PRODUCTS = 'productList/products/FETCH_PRODUCTS';

// actions

export const addProducts = products => ({
    type: ADD_PRODUCT,
    payload: products,
});

export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
});

// reducers

export const productsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case FETCH_PRODUCTS:
            return state;
        case ADD_PRODUCT:
            return payload;
        default:
            return state;
    }
};

// selectors

export const getProducts = state => state.products;

// saga

function* loadProducts() {
    try {
        yield put(loaderOn());
        const data = yield call(fetchData);
        yield put(addProducts(data));
        yield put(loaderOff());
    } catch (error) {
        yield put(loaderOff());
        yield put(showError());
    }
}

export default function* rootSaga() {
    yield takeEvery(FETCH_PRODUCTS, loadProducts);
}
