
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {MainStateType, RootStateType} from "./Redux/state";
// import { state, subscribe} from "./Redux/state";


export const rerenderTree = (state:RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

