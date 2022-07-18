import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://avatars.mds.yandex.net/i?id=97891fe23dd3ed8eb7a322168b1fdddd-4809920-images-thumbs&n=13'/>
            </header>

            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Massages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>


            </nav>

            <div className={'content'}>
                <div>
                    <img src="https://avatars.mds.yandex.net/i?id=f3cbcf844cde6bba8a50f5de3f21feea-2924668-images-thumbs&n=13" />
                </div>
                <div>
                    ava + description
                </div>

                <div>
my posts
                    <div>new post</div>
                </div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                    <div>post 3</div>
                </div>
            </div>

        </div>
    );
}

