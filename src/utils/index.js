import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
import { middleware, rootReducer } from '../redux/store/store';

export const testStore = initialStore => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(
        createStore,
    );
    return createStoreWithMiddleware(rootReducer, initialStore);
};

export const foo = () => {};
