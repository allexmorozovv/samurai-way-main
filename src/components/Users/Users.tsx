import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css"


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {props.userPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.avatar} alt="ava" className={styles.userAvatar}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {props.unFollow(el.id)}}>Unfollow</button> : <button onClick={() => {props.follow(el.id)
                        }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.fullName}</div>
                        <div>{el.status}</div>
                    </span>
                </span>
                <span>
                    <span>
                        <div>{el.location.city}</div>
                        <div>{el.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}
