import React from 'react';
import { createRoot } from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { store } from './app/store';
// import './modules/reducer';

import App from './App';
import './index.css';

// const store = createStore(reducer);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
