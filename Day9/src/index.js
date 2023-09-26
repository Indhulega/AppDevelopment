import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import authReducer from './Components/state/index';
import featuredProductsReducer from './Components/Redux/Store';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: authReducer,
    featuredProducts: featuredProductsReducer,
  },
});

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
