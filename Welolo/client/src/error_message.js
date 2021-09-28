import React from 'react';

class ErrorMessage extends React.Component {
    constructor() {
      super()
      this.state = {errorMessage: "payment was not successful"};
    }
    render() {
      return <p>{this.state.errorMessage}</p>;
    }
}

export default ErrorMessage;
