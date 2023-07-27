import './style.less'

import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import App from './App.jsx'
import store from './store/index';
import { api } from './services/api';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ApiProvider api={ api }> 
        <Provider store={ store }>
            <App />
        </Provider> 
    </ApiProvider> 
);