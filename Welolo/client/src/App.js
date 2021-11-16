// client/src/App.js

import React from "react";
import "./styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SHOW_MERCHANTS } from './components/SHOW_MERCHANTS';
import { SHOW_MERCHANT_MENU } from './components/SHOW_MERCHANT_MENU';
import { TRANSACTION_FORM } from './components/TRANSACTION_FORM';



import NAVBAR from './components/NAVBAR.js';

function App() {
  return (
    <BrowserRouter>
      <NAVBAR />
      <div id="window_container">
        <div id="display_container">
          <Routes>
            <Route path="/" element={ <SHOW_MERCHANTS />} />
            <Route path="/view_menu/:merchant_id" element={ <SHOW_MERCHANT_MENU />} />
            <Route path="/pay_forward/:item_id" element={ <TRANSACTION_FORM /> } />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
