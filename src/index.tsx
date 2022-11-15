
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, state, subscribe} from "./Redux/state";
import {rerenderTree} from "./render";


/*export const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}*/

rerenderTree(state)
// subscribe(rerenderTree)
