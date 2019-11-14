import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga, { productsReducer } from '../products';
import { loaderReducer } from '../loading';
import { errorReducer } from '../error';
import { valueReducer } from '../value';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
    products: productsReducer,
    loading: loaderReducer,
    error: errorReducer,
    value: valueReducer, // searchValue
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
