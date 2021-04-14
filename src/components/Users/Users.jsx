import s from "./Users.module.css";
import React from "react";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }
    return (
        <div>
            <div className={s.content}>
                {pages.map(p => {
                    return <span style={{margin:"15px"}} className={(props.currentPage === p && s.selectedPage ) || (s.page)} onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={s.content}>
                            <span>
                                <div>
                                    <img src={u.photoURL} alt="img" />
                                </div>
                                <div>
                                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users