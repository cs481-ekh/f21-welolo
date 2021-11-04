import React, { Component } from 'react';

import TRANSACTION_FORM from './TRANSACTION_FORM.js';
import TRANSACTION_MOCK_MERCHANT from './TRANSACTION_MOCK_MERCHANT.js';

class TRANSACTION_INIT extends Component {
    render() {
        return (
            <div>
                <br/>
                <TRANSACTION_FORM/>
            </div>
        )
    }
}

export default TRANSACTION_INIT;