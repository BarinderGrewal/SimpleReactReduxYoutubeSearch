import React from 'react'
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import createDebounce from 'redux-debounced';
import reducers from './reducers';
import App from './components/app';

let storeWithMiddleware = applyMiddleware(ReduxPromise, createDebounce())(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App/>
  </Provider>,
   document.querySelector('.container')
  );
