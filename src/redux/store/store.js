import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import productsReducer from '../products';
import loadingReducer from '../loader';
import errorReducer from '../error';
import valueReducer from '../value/reducers';
import rootSaga from '../products/operations';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
    products: productsReducer,
    loading: loadingReducer,
    error: errorReducer,
    value: valueReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
