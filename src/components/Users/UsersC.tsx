import React from "react";
import styles from "./Users.module.css"
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/images/user.webp"

export class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {

                        // @ts-ignore
                        return <span className={this.props.currentPage === p && styles.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>
                    })}
                </div>

                {this.props.userPage.users.map((el: any) => <div key={el.id}>
                <span>
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : userPhoto} alt="ava"
                             className={styles.userAvatar}/>
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
