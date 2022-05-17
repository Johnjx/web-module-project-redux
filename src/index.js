import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducer, composeEnhancers())
}
resetStore()

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>  
  </Router>,
  document.getElementById('root')
);
