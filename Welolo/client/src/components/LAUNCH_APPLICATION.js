
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SHOW_MERCHANTS from './SHOW_MERCHANTS';
import TRANSACTION_FORM from './TRANSACTION_FORM';

const LAUNCH_APPLICATION = () => {
    return (
        <Routes>
            <Route exact path='/' component={SHOW_MERCHANTS}></Route>
            <Route exact path='/pay_forward' component={TRANSACTION_FORM}></Route>
        </Routes>
    );
}

export default LAUNCH_APPLICATION;