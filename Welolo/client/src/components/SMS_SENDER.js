import React, { Component } from 'react';

class SMS_SENDER extends Component {
    
    sendSMS(event) {
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
}

export default SMS_SENDER;