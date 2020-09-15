import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { MainOne } from "./components/MainOne";


ReactDOM.render(
  <React.StrictMode>
      <Router>
         <MainOne />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

