import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'
import SuccessfulPayment from './pages/SuccessfulPayment';
import PAYMENT_FORM from './components/PAYMENT_FORM.js';


class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <PAYMENT_FORM />
        <ErrorMessage />
        <SuccessfulPayment />
      </div>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
