import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.webp";
import { UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType={
    users:Array<UserType>
    totalUsersCount:number
    pageSize:number
    onPageChanged:(pageNumber: number)=>void
    follow:(id:number)=>void
    unfollow:(id:number)=>void
    currentPage:number
}

export const Users = (props:UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {

                    // @ts-ignore
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 key={p}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>

            {props.users.map((el) => <div key={el.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' +el.id}>
                        <img src={el.photos.small != null ? el.photos.small : userPhoto} alt="ava"
                             className={styles.userAvatar}/>
                            </NavLink>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                           props.unfollow(el.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                </span>
                <span>
                    <span>
                        <div>{'el.location.city'}</div>
                        <div>{'el.location.country'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}