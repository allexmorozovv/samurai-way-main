import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.webp"

export class Users extends React.Component<any,any>{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.userPage.users.map((el:any) => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small!=null?el.photos.small:userPhoto} alt="ava" className={styles.userAvatar}/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            this.props.unFollow(el.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(el.id)
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
}
