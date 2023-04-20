import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/stylesheets/index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './redux/reducer';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

