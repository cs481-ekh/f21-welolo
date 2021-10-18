import React from 'react';
import ReactDOM from 'react-dom';
import SuccessfulPayment from './pages/SuccessfulPayment.js';
import TRANSACTION_INIT from './components/TRANSACTION_INIT.js';

class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <TRANSACTION_INIT />
      </div>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
