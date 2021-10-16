import React, { Component } from 'react';

class TRANSACTION_FORM extends Component {

    render(){ 
        return (
            <form onSubmit={this.onSubmit}>
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

export default TRANSACTION_FORM;