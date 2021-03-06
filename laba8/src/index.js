import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import store from './config/store'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';



const app = <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>


ReactDOM.render(app, document.getElementById('root'));



