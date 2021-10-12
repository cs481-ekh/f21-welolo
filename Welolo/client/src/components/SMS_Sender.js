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
            error: false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.SmsErrorHandler = this.SmsErrorHandler.bind(this);
    }

    SmsErrorHandler() {
      const [error, setError] = useState(null);
  
      React.useEffect(() => {
          fetch("/api/send_message")
              .then((res) => res.json())
              .then((error) => setError(error.errormessage));
      }, []);
  
        return (
          <div className="smsError">
              <h1>
                  {error.errormessage}
              </h1>
          </div>
        );
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
              return (<SmsErrorHandler/>);
            }
          });
    }
    
    render() {
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

export default SMS_SENDER;