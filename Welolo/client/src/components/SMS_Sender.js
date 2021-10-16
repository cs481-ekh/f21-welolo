import React, { Component } from 'react';
import TRANSACTION_FORM from './TRANSACTION_FORM';

class SMS_SENDER extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                recipient: '',
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
        fetch("/api/send_message", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  recipient: '',
                  body: ''
                }
              });
            } else {
                console.log("Think there's an error?");
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
    }
    
    render() {
        return (
            <div>
                <TRANSACTION_FORM />
            </div>
        );
    }
}

export default SMS_SENDER;