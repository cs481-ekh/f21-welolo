import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'

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
      </form>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
