import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import BROWSE_MERCHANTS from './components/BROWSE_MERCHANTS.js';
import TRANSACTION_FORM from './components/TRANSACTION_FORM.js';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={BROWSE_MERCHANTS} />
    <Route path="/pay_it_forward" component={TRANSACTION_FORM} />
  </Route>
);