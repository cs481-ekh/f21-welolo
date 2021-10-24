import React from 'react';
import ReactDOM from 'react-dom';
import SuccessfulPayment from './pages/SuccessfulPayment.js';
import TRANSACTION_INIT from './components/TRANSACTION_INIT.js';
import TRANSACTION_MOCK_MERCHANT from './components/TRANSACTION_MOCK_MERCHANT.js';

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
        <br/>
        <TRANSACTION_MOCK_MERCHANT />
        <TRANSACTION_INIT />
      </div>

    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));
