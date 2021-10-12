import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from './error_message'
import SuccessfulPayment from './SuccessfulPayment.js';


class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        recipientname: '', 
        recipientph: '',
        fundquantity: '',
        message: ''
      },
      errors: {},
    };
    this.handleValidation = this.handleValidation.bind(this);

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
      if (!fields["recipientph"].match(/^\+?[1 ]?(\d{10})$/)) {
        formIsValid = false;
        errors["recipientph"] = "Allowed formats are 3081353543 or +3081353543 or 13081353543 or +13081353543";
      }
      if(!formIsValid){
        if(fields["recipientph"].length === 10){
          fields["recipientph"] = "+1"+fields["recipientph"];
        }
        if(fields["recipientph"].length === 11 && fields["recipientph"].indexOf("+") === 0){
          fields["recipientph"].replace("+", "+1");
        }
        if(fields["recipientph"].length === 11 && fields["recipientph"].indexOf("1") === 0){
          fields["recipientph"].replace("1", "+1");
        }
      }
    }

    if (fields["recipientph"].length > 16) {
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
      fetch('/', {
        method: 'POST',
        body: JSON.stringify(this.state.fields)
      });
    } else {
      alert("Please fill out all the inputs. Enter numbers for phone number and fund and letters for name and message.")
    }
  }

  handleChange(e) {
    let fields = this.state.fields;
    const name = e.target.name;
    const value = e.target.value;
    fields[name] = value;
    this.setState({
      fields
    });
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.submitHandler.bind(this)}>
    
          <h1>Payment</h1>
          <p>Recipient Name:</p>
          <input
            type="text" data-cy="recipient_name" name="recipientname" defaultValue={this.state.fields.recipientname} onChange={(event) => this.handleChange(event)} /> <br/>
          <p>Recipient Ph#:</p>
          <input
            type="number" data-cy="recipient_ph" name="recipientph" defaultValue={this.state.fields.recipientph} onChange={(event) => this.handleChange(event)} /> <br/>
          <p>Quantity of funds:</p>
          <input
            type="number" data-cy="fund_quantity" name="fundquantity" defaultValue={this.state.fields.fundquantity}  onChange={(event) => this.handleChange(event)}  /> <br/>
          <p>Message:</p>
          <input
            type="text" data-cy="message" name="message" defaultValue={this.state.fields.message} onChange={(event) => this.handleChange(event)} /> <br/>
          <input
          type='submit' value='Pay forward' data-cy="submit"/>
        <ErrorMessage />
        <SuccessfulPayment />
      </form>
      </div>
    )}
}

ReactDOM.render(<PaymentForm />, document.getElementById('root'));