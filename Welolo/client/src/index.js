import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'
import SuccessfulPayment from './SuccessfulPayment.js';
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
