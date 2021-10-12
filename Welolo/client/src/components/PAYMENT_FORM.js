import React, { Component } from 'react';
import SMS_SENDER from './SMS_SENDER.js';

class PAYMENT_FORM extends Component {
    render() {
        return (
            <div>
                <h1>Payment</h1>
                <p>Recipient Name:</p>
                <input
                type="text" data-cy="recipient_name"
                />
                <p>Quantity of funds:</p>
                <input
                type="text" data-cy="fund_quantity"
                />
                <SMS_SENDER />
            </div>
        );
    }
}

export default PAYMENT_FORM;