import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

import { StyleSheetManager } from 'styled-components';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}

const reactRoot = ReactDOM.createRoot(rootElement);
reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleSheetManager>
        <App />
      </StyleSheetManager>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
