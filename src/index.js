import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './components/reducer/rootReducer'
import './index.css'
import App from './App';
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router } from 'react-router-dom'
const store = createStore(rootReducer, applyMiddleware(thunk, createLogger()));
store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
<Provider store={store}>
<Router>
    <App />
</Router>
</Provider>, document.getElementById('root'));