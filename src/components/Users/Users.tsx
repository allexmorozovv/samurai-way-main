import React from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css"

export const Users = (props:UsersPropsType) => {


    return (
        <div>
            {
                props.usersPage.users.map(u=><div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatar} alt="ava"className={styles.userAvatar}/>
                        </div>
                        <div>
                            {u.followed? <button onClick={()=>{props.follow(u.id)}} >Unfollow</button >: <button onClick={()=>{props.unfollow(u.id)}} >Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}