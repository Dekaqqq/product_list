import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import store from './redux/store/store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </Provider>,

    document.getElementById('root'),
);
