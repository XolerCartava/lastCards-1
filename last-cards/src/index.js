import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

let nav = {
    SignIN : "/wat",
    FAQ : "/faq",
    "Desk" : "/desk",
    "Start Page" : '/',
};

ReactDOM.render(
  <React.StrictMode>
    <App navigationElements = {nav}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
