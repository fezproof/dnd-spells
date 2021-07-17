import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import { Provider } from 'urql';
import App from './App';
import client from './config/urqlConfig';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
