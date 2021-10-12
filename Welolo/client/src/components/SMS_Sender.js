import React, { Component } from 'react';

class SMS_SENDER extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                recipient: '',
                body: ''
            },
            submitting: false,
            error: false,
            errormessages: {
                status : '',
                code : '', 
                moreInfo: ''
            }
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
                const name = event.target.getAttribute('name');
              this.setState({
                error: true,
                submitting: false,
                errormessages: { ...data.errormessage, [name]: event.target.value }
              });
            }
          });
    }
    
    render() {
      if(this.state.error === true){
        return (<div><h1> We were unable to complete the transaction because of the following error: </h1>
          <h3>Status: {this.state.errormessages.status}</h3>
          <h3>Code: {this.state.errormessages.code}</h3>
          <h3>More Info: {this.state.errormessages.moreInfo}</h3>
        </div>)
      }
        return (
            <form
            onSubmit={this.onSubmit}
          >
            <div>
              <label htmlFor="recipient">Recipient:</label>
              <input
                type="tel"
                name="recipient"
                id="recipient"
                value={this.state.message.recipient}
                onChange={this.onHandleChange} />
            </div>
            <div>
              <label htmlFor="body">Message:</label>
              <textarea
                name="body"
                id="body"
                value={this.state.message.body}
                onChange={this.onHandleChange} />
            </div>
            <button type="submit" disabled={this.state.submitting}>
              Send message
            </button>
          </form>
        );
      }
}    

export default SMS_SENDER;