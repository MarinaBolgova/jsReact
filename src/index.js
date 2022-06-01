import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let inventory={
       'food':2,
       'whater':3,
       'suplices':5,
}
let personal={
    'povar':2,
    'workers':3,
}
function callSend(NewText) {
    inventory[NewText]=10;
    console.log(inventory);

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App inventory={inventory} personal={personal} callSend={callSend}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
