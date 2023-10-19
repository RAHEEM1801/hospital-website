import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Postpage from './Postpage';
import Homepage from './Homepage';
import Appoinment from './Appoinment';
import Dropdown from './Dropdown';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Postpage></Postpage> */}
    <Homepage/>
    {/* <Dropdown/> */}
    {/* <Appoinment/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
