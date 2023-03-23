import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { setupStore } from './store';
import App from './App';
import './index.css'

const store = setupStore();

const reactRoot = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
reactRoot.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
