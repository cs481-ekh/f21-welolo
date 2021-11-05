import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import LAUNCH_APPLICATION from './components/LAUNCH_APPLICATION';
import NAVBAR from './components/NAVBAR.js';

import "./styles/main.css";

ReactDOM.render(
  (
    <BrowserRouter>
      <div id="container">
        <NAVBAR />
        <LAUNCH_APPLICATION />
      </div>
    </BrowserRouter>
  ), document.getElementById('root')
);