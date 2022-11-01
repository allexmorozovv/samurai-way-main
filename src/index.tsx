import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";

export const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderTree()
store.subscribe(rerenderTree)



