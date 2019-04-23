import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import * as serviceWorker from './main/serviceWorker';
import store from './store/store';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    // Wraps the entire app - any component can now contain Route components
    <BrowserRouter>
        <App STOR={store}/>
    </BrowserRouter>,
    document.getElementById('root')
    );
    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
