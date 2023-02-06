import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    userId: number | null
    email: string | null
    isAuth: boolean
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://avatars.mds.yandex.net/i?id=97891fe23dd3ed8eb7a322168b1fdddd-4809920-images-thumbs&n=13'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}