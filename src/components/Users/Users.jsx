import s from "./Users.module.css";

let Users = (props) => {

    // if (props.users.length === 0) {
    //     debugger
    //     props.setUsers([
    //         { id: "1", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: true, fullName: "My name is Kamil", status: "s1", location: { city: "ci1", country: "cy1", } },
    //         { id: "2", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: false, fullName: "My name is Sasha", status: "s2", location: { city: "ci1", country: "cy1", } },
    //         { id: "3", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: false, fullName: "My name is Guzel", status: "s3", location: { city: "ci1", country: "cy1", } },
    //         { id: "4", photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", isfollowed: true, fullName: "My name is Maxim", status: "s4", location: { city: "ci1", country: "cy2", } },
    //     ])
    // }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id} className={s.content}>
                            <span>
                                <div>
                                    <img src={u.photoURL} alt="img" />
                                </div>
                                <div>
                                    {u.isfollowed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
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