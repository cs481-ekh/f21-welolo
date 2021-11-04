import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import TRANSACTION_MOCK_MERCHANT from './components/TRANSACTION_MOCK_MERCHANT.js';
=======
import SuccessfulPayment from './pages/SuccessfulPayment.js';
import TRANSACTION_INIT from './components/TRANSACTION_INIT.js';
import { getMerchantData } from './util/getMerchantData.js';
import { getMerchants } from './util/getMerchants.js';

var id = 5;
getMerchantData(id);
getMerchants();

>>>>>>> c251315852178765deb2138b9d2c32fd0815de45

class InitWebApp extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <TRANSACTION_MOCK_MERCHANT />
      </div>
    )}
}

<<<<<<< HEAD
ReactDOM.render(<InitWebApp />, document.getElementById('root'));
=======
ReactDOM.render(<PaymentForm />, document.getElementById('root'));
>>>>>>> c251315852178765deb2138b9d2c32fd0815de45
