import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer,composeWithDevTools());
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
