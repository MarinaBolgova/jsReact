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

let users={
    'name':'IvanPetrov',
    'pass':'123456',

}

function callSend(NewText,NewVal) {
    inventory[NewVal]=NewText;


    console.log(inventory);
    rerender(inventory,callSend)

}

const root = ReactDOM.createRoot(document.getElementById('root'));


function rerender(data,callSend) {

    root.render(
        <App inventory={data} callSend={callSend}/>
    );


}
rerender(inventory,callSend)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
