import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import ErrorMessage from './error_message'
import SuccessfulPayment from './pages/SuccessfulPayment';

=======
import SuccessfulPayment from './pages/SuccessfulPayment.js';
import TRANSACTION_INIT from './components/TRANSACTION_INIT.js';
>>>>>>> 206e1bf6da0dd7a975877ccee61194f573e598dd

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //recipient name
    if (!fields["recipientname"]) {
      formIsValid = false;
      errors["recipientname"] = "Please insert the recipient name";
    }

    if (typeof fields["recipientname"] !== "undefined") {
      if (!fields["recipientname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["recipientname"] = "Only letters are allowed";
      }
    }

    if (fields["recipientname"].length > 30) {
      formIsValid = false;
        errors["recipientname"] = "Sorry, the name is too long";
    }

    //recipient phone
    if (!fields["recipientph"]) {
      formIsValid = false;
      errors["recipientph"] = "Please insert the recipient phone number";
    }

    if (typeof fields["recipientph"] !== "undefined") {
      if (!fields["recipientph"].match(/^\d+$/)) {
        formIsValid = false;
        errors["recipientph"] = "Only numbers are allowed";
      }
    }

    if (fields["recipientph"].length > 10) {
      formIsValid = false;
        errors["recipientph"] = "Sorry, the phone number is too long";
    }

    //fund quantity
    if (!fields["fundquantity"]) {
      formIsValid = false;
      errors["fundquantity"] = "Please insert the fund amount";
    }

    if (typeof fields["recipientph"] !== "undefined") {
      if (!fields["recipientph"].match(/^\d+$/)) {
        formIsValid = false;
        errors["recipientph"] = "Only numbers are allowed";
      }
    }

    //message
    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "Please insert a message";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  submitHandler(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      const data = new FormData(e.target);
    
      fetch('/', {
        method: 'POST',
        body: data,
      });
    } else {
      alert("Please fill out all the inputs. Enter numbers for phone number and fund and letters for name and message.")
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
<<<<<<< HEAD
        <form  onSubmit={this.submitHandler.bind(this)}>
    
          <h1>Payment</h1>
          <p>Recipient Name:</p>
          <input
            type="text" data-cy="recipient_name" name="recipientname" value={this.state.fields["recipientname"]} onChange={this.handleChange.bind(this, "recipientname")} /> <br/>
          <p>Recipient Ph#:</p>
          <input
            type="number" data-cy="recipient_ph" name="recipientph" value={this.state.fields["recipientph"]} onChange={this.handleChange.bind(this, "recipientph")} /> <br/>
          <p>Quantity of funds:</p>
          <input
            type="number" data-cy="fund_quantity" name="fundquantity" value={this.state.fields["fundquantity"]}  onChange={this.handleChange.bind(this, "fundquantity")}  /> <br/>
          <p>Message:</p>
          <input
            type="text" data-cy="message" name="message" value={this.state.fields["message"]} onChange={this.handleChange.bind(this, "message")} /> <br/>
          <input
          type='submit' value='Pay forward' data-cy="submit"/>
        <ErrorMessage />
        <SuccessfulPayment />
      </form>
      </div>
=======
        <br/>
        <TRANSACTION_INIT />
      </div>

>>>>>>> 206e1bf6da0dd7a975877ccee61194f573e598dd
    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
