import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import counterReducer from './reducers/index'
import { Provider } from 'react-redux'

let initialState = 0

const setInitialState = () => {
  let localSave = JSON.parse(localStorage.getItem('todos'))
  initialState = localSave.length
  return initialState
}

if (JSON.parse(localStorage.getItem('todos'))) {
  setInitialState()
}


const store = createStore(
  counterReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
