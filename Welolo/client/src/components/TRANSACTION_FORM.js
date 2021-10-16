import React, { Component } from 'react';

import { sendSMS } from './../util/SMS_SENDER.js';
import { sendPayment } from "./../util/PAYMENT_SENDER.js";

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
    }

    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        var transactionData = JSON.stringify(this.state.message)
        
        if(sendPayment(transactionData)) {
            if(sendSMS(transactionData)) {
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
            console.log("sendPaymetn(...) didn't return true :(")
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