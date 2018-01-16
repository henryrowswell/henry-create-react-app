import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

function appReducers(state = 0, action) {
    return state
}

let store = createStore(appReducers)

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount')
  );
});