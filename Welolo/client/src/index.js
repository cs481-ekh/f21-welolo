import React from 'react';
import ReactDOM from 'react-dom';
import TRANSACTION_MOCK_MERCHANT from './components/TRANSACTION_MOCK_MERCHANT.js';

class InitWebApp extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <TRANSACTION_MOCK_MERCHANT />
      </div>

    )}
}

ReactDOM.render(<InitWebApp />, document.getElementById('root'));