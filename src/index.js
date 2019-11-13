import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import store from './redux/store/store';

ReactDOM.render(
    <HashRouter basename="/">
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root'),
);
