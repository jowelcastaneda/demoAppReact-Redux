import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { debounce } from 'lodash';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux'
import rootReducer from './components/reducer/rootReducer'
import './index.css'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

export const REDUX_SCHEMA_VERSION = 13;
export const REDUX_DEBOUNCE_INTERVAL = 100; // in milliseconds
export const REDUX_STORAGE_KEY = 'nbpAppState';
const REDUX_DEV_TOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
const composeEnhancers = window[REDUX_DEV_TOOLS] || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        thunk,
        promiseMiddleware(),
        promise,
    ),
);


export const createDefaultStore = (rootState = {}) => {
    const defaultStore = createStore(
        rootReducer,
        rootState,
        enhancers,
    );

    const saveAppState = () => {
        const storableState = {}

        storableState.schemaVersion = REDUX_SCHEMA_VERSION;

        localStorage.setItem(
            REDUX_STORAGE_KEY,
            JSON.stringify(storableState),
        );
    };

    window.dump = () => defaultStore.getState();
    window.invalidateToken = () => (
        defaultStore.dispatch({ type: 'DEBUG_INVALIDATE_TOKEN' })
    );

    defaultStore.subscribe(debounce(saveAppState, 100));

    return defaultStore;
};

export const store = createDefaultStore();

ReactDOM.render(
<Provider store={store}>
<Router>
    <App />
</Router>
</Provider>, document.getElementById('root'));