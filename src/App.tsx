import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MainStateType,  state} from "./Redux/state";
import {addPost} from "./Redux/state";


export const App = (props: MainStateType) => {


    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path={"/profile"} render={() => <Profile posts={state.profilePage.posts} />}/>
                <Route path={"/dialogs"}
                       render={() => <Dialogs dialogs={state.dialogsPage.dialogs}
                                              messages={state.dialogsPage.messages}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>


    );
}

