import React from 'react';
import ReactDOM from 'react-dom';

import TRANSACTION_MOCK_MERCHANT from './components/TRANSACTION_MOCK_MERCHANT.js';
import { getMerchantData } from './util/getMerchantData.js';
import { getMerchants } from './util/getMerchants.js';

var id = 5;
getMerchantData(id);
getMerchants();



class InitWebApp extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <TRANSACTION_MOCK_MERCHANT />
      </div>
    )}
}

ReactDOM.render(<InitWebApp />, document.getElementById('root'));
