import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { Provider } from 'urql';
import App from './App';
import client from './config/urqlConfig';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
