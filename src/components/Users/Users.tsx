import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.webp"


export const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.userPage.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    props.setUsers(res.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.userPage.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small!=null?el.photos.small:userPhoto} alt="ava" className={styles.userAvatar}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            props.unFollow(el.id)
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
