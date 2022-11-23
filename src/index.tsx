import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";

// import {store} from "./redux/store";
import {store} from "./redux/reduxStore";
import {StoreType} from "./redux/store";
import {Provider} from "./StoreContext";




const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
         <Provider store={store}>
            <App store={store}/>
         </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderTree()
store.subscribe(() => {
    rerenderTree()
})
