import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
   if (props.userPage.users.length===0){
       props.setUsers([  {
           id: 1,
           avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
           followed: true,
           fullName: "Alex",
           status: "I'm fine",
           location: {city: "Rome", country: "Italy"}
       },
           {
               id: 2,
               avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
               followed: false,
               fullName: "Alex",
               status: "I'm fine",
               location: {city: "Rome", country: "Italy"}
           },
           {
               id: 3,
               avatar: "https://avatars.mds.yandex.net/i?id=d2abdba8897217f4f18bba2f1e7c1888-5545903-images-thumbs&n=13",
               followed: true,
               fullName: "Alex",
               status: "I'm fine",
               location: {city: "Rome", country: "Italy"}
           },])
   }

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
