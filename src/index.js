import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import { BrowserRouter as Router } from 'react-router-dom';
// import * as serviceWorker from './serviceWorker';

const client = Client.buildClient({
  storefrontAccessToken: 'ea2a8854901dc0285f30515803e46c6f',
  domain: 'hwmirrors.myshopify.com'
});

ReactDOM.render(
  <Router>
    <App client={client} />
  </Router>,
  document.getElementById('root')
);

// serviceWorker.unregister();
