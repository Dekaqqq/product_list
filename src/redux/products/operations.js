import { put, call, takeEvery } from 'redux-saga/effects';
import { loadingActions } from '../loader';
import { fetchData } from '../../services/fetchData';
import { addProducts } from './actions';
import showError from '../error/actions';
import { FETCH_PRODUCTS } from './types';

function* loadProducts() {
    try {
        yield put(loadingActions.loaderOn());
        const data = yield call(fetchData);
        yield put(addProducts(data));
        yield put(loadingActions.loaderOff());
    } catch (error) {
        yield put(loadingActions.loaderOff());
        yield put(showError());
    }
}

export default function* rootSaga() {
    yield takeEvery(FETCH_PRODUCTS, loadProducts);
}
