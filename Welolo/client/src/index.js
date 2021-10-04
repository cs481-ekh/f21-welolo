import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'
import SuccessfulPayment from './pages/SuccessfulPayment';


class PaymentForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Payment</h1>
        <p>Recipient Name:</p>
        <input
          type="text"
        />
        <p>Recipient Ph#:</p>
        <input
          type="text"
        />
        <p>Quantity of funds:</p>
        <input
          type="text"
        />
        <p>Message:</p>
        <input
          type="text"
        />
        <input
        type='submit' value='Pay forward'/>
        <ErrorMessage />
        <SuccessfulPayment />
      </form>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
