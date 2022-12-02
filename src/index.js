import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/Header/Header.js';
import App from '/Users/tramtram/turing_work/3mod/projects/2week/rancid-tomatillos/src/components/app/App.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
