import React, { Component } from 'react';

import { sendSMS } from '../util/sendSMS.js';

import { sendPayment } from './../util/sendPayment.js';

import { withRouter } from '../util/withRouter';

class UD_TRANSACTION_FORM extends Component {
    constructor(props) {
      super(props);
      this.state = {
          message: {
              recipient_name: '',
              recipient: '',
              sender_quantity: '',
              body: ''
          },
          submitting: false,
          error: false,
          errors: {},
      };
      this.onHandleChange = this.onHandleChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleValidation = this.handleValidation.bind(this);
    }

    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
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

    handleValidation() {
        let fields = this.state.message;
        let errors = {};
        let formIsValid = true;
    
        //recipient name
        if (!fields["recipient_name"]) {
          formIsValid = false;
          errors["recipient_name"] = "Please insert the recipient name";
        }
    
        if (typeof fields["recipient_name"] !== "undefined") {
          if (!fields["recipient_name"].match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            errors["recipient_name"] = "Only letters are allowed";
          }
        }
    
        if (fields["recipient_name"].length > 30) {
          formIsValid = false;
            errors["recipient_name"] = "Sorry, the name is too long";
        }
    
        //recipient phone
        if (!fields["recipient"]) {
          formIsValid = false;
          errors["recipient"] = "Please insert the recipient phone number";
        }
    
        if (typeof fields["recipient"] !== "undefined") {
          if (!fields["recipient"].match(/^\+?[1 ]?(\d{10})$/)) {
            formIsValid = false;
            errors["recipient"] = "Allowed formats are 3081353543 or +3081353543 or 13081353543 or +13081353543";
          }
          if(!formIsValid){
            if(fields["recipient"].length === 10){
              fields["recipient"] = "+1"+fields["recipient"];
            }
            if(fields["recipient"].length === 11 && fields["recipient"].indexOf("+") === 0){
              fields["recipient"].replace("+", "+1");
            }
            if(fields["recipient"].length === 11 && fields["recipient"].indexOf("1") === 0){
              fields["recipient"].replace("1", "+1");
            }
          }
        }
    
        if (fields["recipient"].length > 16) {
          formIsValid = false;
          errors["recipient"] = "Sorry, the phone number is too long";
        }
    
        //send quantity
        if (!fields["sender_quantity"]) {
          formIsValid = false;
          errors["sender_quantity"] = "Please insert the fund amount";
        }
    
        if (typeof fields["sender_quantity"] !== "undefined") {
          if (!fields["sender_quantity"].match(/^\d+$/)) {
            formIsValid = false;
            errors["sender_quantity"] = "Only numbers are allowed";
          }
        }
    
        //message
        if (!fields["body"]) {
          formIsValid = false;
          errors["body"] = "Please insert a message";
        }
    
        this.setState({ errors: errors });
        return errors;
      }         

      async onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        var transactionData = JSON.stringify(this.state.message)
        // actually attempts payment
        var successfulPayment = await sendPayment(transactionData)
        .then(() => {
            return true })
        .catch(err => {
            return false
        })
        
        if(successfulPayment) {
            //actually attempts sms
            var successfulSMS = await sendSMS(transactionData)
                .then(res => res.json())
                .then(data => {
                    return data.success })
                .catch(err => {
                    return false
                })
            if(successfulSMS) {
                // SMS succeeded
                this.setState({
                    error:false, // should do the opposite if error state is false
                    submitting:false,
                    message:{
                        recipient_name: '',
                        recipient: '',
                        sender_quantity: '',
                        body: ''
                    }
                });
            } else {
                // SMS failed
                console.log("error in TRANSACTION_FORM.js -- SMS Failed")
                this.setState({
                    error: true, // should do something if error state is true
                    submitting: false
                });
            }
        } else {
           console.log("error in TRANSACTION_FORM.js -- Payment Failed")
        }
    }

  render(){
    return (
      <div id="payment_wrapper">
        <h3></h3>
        <form onSubmit={this.onSubmit}>
          <div id="payment_form_recipient_name_wrapper">
            <div className="label_wrapper">
              <label id="recipient_name_label" htmlFor="recipient_name">Recipient Full Name</label>
            </div>
            <input 
              type="text"
              name="recipient_name"
              id="recipient_name"
              value={this.state.message.recipient_name}
              onChange={this.onHandleChange}
            />
          </div>
          <div id="payment_form_recipient_number_wrapper">
            <div className="label_wrapper">
              <label id="recipient_number_label" htmlFor="recipient">Recipient Phone Number</label>
              <span id="recipient_number_label_example">&nbsp;ex: +12223334444</span>
            </div>
            <input
              type="tel"
              name="recipient"
              id="recipient"
              value={this.state.message.recipient}
              onChange={this.onHandleChange}
            />
          </div>
          <div id="payment_form_sender_quantity_wrapper">
            <div className="label_wrapper">
              <label id="sender_quantity_label" htmlFor="sender_quantity">Quantity (USD)</label>
            </div>
            <input
              type="text"
              name="sender_quantity"
              id="sender_quantity"
              value={this.state.message.sender_quantity}
              onChange={this.onHandleChange}
            />
          </div>
          <div id="payment_form_sender_message_wrapper">
            <div className="label_wrapper">
              <label id="sender_message_label" htmlFor="body">What would you like to say?</label>
            </div>
            <textarea 
              name="body"
              id="body"
              value={this.state.message.body}
              onChange={this.onHandleChange}
            />
          </div>
          <div id="payment_form_submit_transaction_wrapper">
            <button type="submit" htmlFor="submit" name="submit" id="submit" disabled={this.state.submitting}>
              Pay it Forward
            </button>
          </div>
        </form>                     
        <div>{this.state.error ? <p>Please try again! phone number you entered was not a valid phone number</p> : <p></p>}</div>
      </div>
    );
  }
}

const TRANSACTION_FORM = withRouter(UD_TRANSACTION_FORM);

export { TRANSACTION_FORM };