import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'
import SuccessfulPayment from './pages/SuccessfulPayment.js';
import SMS_SENDER from './components/SMS_Sender.js';

class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <SMS_SENDER />
        <ErrorMessage />
        <SuccessfulPayment />
      </div>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
