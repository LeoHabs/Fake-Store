import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/stylesheets/index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './redux/reducer';
import { Provider } from "react-redux";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

