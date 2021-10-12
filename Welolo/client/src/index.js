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
          type="text" data-cy="recipient_name"
        />
        <p>Recipient Ph#:</p>
        <input
          type="text" data-cy="recipient_ph"
        />
        <p>Quantity of funds:</p>
        <input
          type="text" data-cy="fund_quantity"
        />
        <p>Message:</p>
        <input
          type="text" data-cy="message"
        />
        <input
        type='submit' value='Pay forward' data-cy="submit"/>
        <ErrorMessage />
        <SuccessfulPayment />
      </form>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
