import './style.less'

import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import App from './App.tsx'
import store from './store/index.ts';
import { api } from './services/api.ts';


let rootDiv = document.getElementById("root") as HTMLElement;

if (!rootDiv) {
    throw new Error("React App render error: cannot find a container with id='root'");
}

const root = ReactDOM.createRoot(rootDiv);

root.render(
    <ApiProvider api={ api }> 
        <Provider store={ store }>
            <App />
        </Provider> 
    </ApiProvider> 
);