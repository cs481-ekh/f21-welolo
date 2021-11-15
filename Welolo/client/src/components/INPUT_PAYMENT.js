import React, { Component } from 'react';

import { withRouter } from '../util/withRouter';

class UD_INPUT_PAYMENT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successfulPayment: '',
            emergepayForm: null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidUpdate() {
       // console.log(this.state);
    }

    componentDidMount() {
        getTransactionToken(JSON.stringify(this.props.state))
            .then(res=>res.json())
            .then(data => {
                this.setState({emergepayForm: window.emergepayFormFields.init({
                    // (required) Used to set up each field
                    transactionToken: data.transactionToken,
                    // (required) The type of transaction to run
                    transactionType: "CreditSale",
                    // (optional) Configure which fields to use and the id's of the elements to append each field to
                    fieldSetUp: {
                        // These fields are valid for credit card transactions
                        cardNumber: {
                            appendToSelector: "cardNumberContainer",
                            useField: true,
                            // optional, see styles section above for more information
                            styles: { "float": "right" }
                        },
                        cardExpirationDate: {
                            appendToSelector: "expirationDateContainer",
                            useField: true,
                            // optional, see styles section above for more information
                            styles: { "border": "1px solid red" }
                        },
                        cardSecurityCode: {
                            appendToSelector: "securityCodeContainer",
                            useField: true,
                            // optional, see styles section above for more information
                            styles: {}
                        },
                        // These fields are valid for all transaction types
                        totalAmount: {
                            appendToSelector: "amountContainer",
                            useField: false,
                            // optional, see styles section above for more information
                            styles: {}
                        },
                        externalTranId: {
                            useField: false,
                            // optional, see styles section above for more information
                            styles: {}
                        }
                    },
                    // (optional) If there is a validation error for a field, the styles set in this object will be applied to the field
                    fieldErrorStyles: {
                        "border": "none",
                        "box-shadow": "0px 0px 4px 1px red"
                    },
                    // (optional) This callback function will be called when there is a validation error for a field.
                    onFieldError: function (data) {
                        console.log(data);
                    },
                    // (optional) This callback function will be called when a field validation error has been cleared.
                    onFieldErrorCleared: function (data) {
                        console.log(data);
                    },
                    // (optional) Callback function that gets called after a successful transaction
                    onTransactionSuccess: function (approvalData) {
                        console.log('approvalData', approvalData);
                        window.location = 'https://www.chargeitpro.com';
                    },
                    // (optional) Callback function that gets called after a failure occurs during the transaction (such as a declined card)
                    onTransactionFailure: function (failureData) {
                        console.log('failureData', failureData);
                    }
                })})
                console.log(this.state);
            })
    }

    async onSubmit(event) {
        event.preventDefault();
        console.log(this);
        this.state.emergepayForm.process();
        console.log(this.state);
        console.log("just finished submitting i think?");
    }

    render() {
            return (
                <div id="payment_wrapper">
                    <form onSubmit={this.onSubmit}>
                        <div id="cardNumberContainer"></div>
                        <div id="expirationDateContainer"></div>
                        <div id="securityCodeContainer"></div>
                        <div id="amountContainer"></div>
                        <button 
                            id="payBtn"
                            type="submit"
                            onClick={this.submitForm}
                        >
                            Pay
                        </button>
                    </form>
                </div>
            )
    }

}

function getTransactionToken(transactionData) {
    return fetch("/start-transaction", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: transactionData
    });
}

const INPUT_PAYMENT = withRouter(UD_INPUT_PAYMENT);
export { INPUT_PAYMENT };