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
    }

    onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
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
            <div>
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
                <div>{this.state.error ? <p>Please try again! phone number you entered was not a valid phone number</p> : <p></p>}</div>
            </div>
        );
    }

}

export default TRANSACTION_FORM;