import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'
<<<<<<< Updated upstream
import SuccessfulPayment from './SuccessfulPayment.js';
=======
import SuccessfulPayment from './pages/SuccessfulPayment';
import SMS_Sender from './components/SMS_Sender';
>>>>>>> Stashed changes


class PaymentForm extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <SMS_Sender />
        <ErrorMessage />
        <SuccessfulPayment />
      </div>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
