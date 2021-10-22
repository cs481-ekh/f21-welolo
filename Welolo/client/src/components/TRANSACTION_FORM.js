import React, { Component } from 'react';

import { sendSMS } from '../util/sendSMS.js';

import { sendPayment } from './../util/sendPayment.js';

class TRANSACTION_FORM extends Component {
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
            error: false
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
        return errors;
      }    

    async onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        var transactionData = JSON.stringify(this.state.message)
        // actually attempts payment
        var successfulPayment = await sendPayment(transactionData)
            .then(res => res.json())
            .then(data => { return data.success })
            .catch(err => {
                console.log(err)
                return false
            })
        if(successfulPayment) {
            //actually attempts sms
            var successfulSMS = await sendSMS(transactionData)
                .then(res => res.json())
                .then(data => { return data.success })
                .catch(err => {
                    console.log(err)
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
            <form onSubmit={this.onSubmit}>
                <h1>Payment</h1>
                <div>
                    <label htmlFor="recipient_name">Recipient Name:</label>
                    <input 
                        type="text"
                        name="recipient_name"
                        id="recipient_name"
                        value={this.state.message.recipient_name}
                        onChange={this.onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="recipient">Recipient Phone Number (ex: +12223334444):</label>
                    <input
                        type="tel"
                        name="recipient"
                        id="recipient"
                        value={this.state.message.recipient}
                        onChange={this.onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="sender_quantity">Quantity (USD):</label>
                    <input
                        type="text"
                        name="sender_quantity"
                        id="sender_quantity"
                        value={this.state.message.sender_quantity}
                        onChange={this.onHandleChange}
                    />
                </div>
                <div>
                    <label htmlFor="body">Message:</label>
                    <textarea 
                        name="body"
                        id="body"
                        value={this.state.message.body}
                        onChange={this.onHandleChange}
                    />
                </div>
                <button type="submit" disabled={this.state.submitting}>
                    Send message
                </button>
            </form>
        );
    }

}

export default TRANSACTION_FORM;