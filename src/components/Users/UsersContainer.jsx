import axios from 'axios'
import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../redux/users-reducer";
import Preloader from '../common/preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.toggleIsFetching(false);
                    let _id = 1;
                    let _users = response.data.items.map(u => {
                        let _u = { ...u, photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", location: { country: "country", city: "city" }, id: _id };
                        _id++;
                        return _u
                    })
                    this.props.setUsers(_users);
                    this.props.setTotalUsersCount(response.data.totalCount - Math.ceil((response.data.totalCount / 100) * 99.9));
                })
        }
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                let _id = 1;
                let _users = response.data.items.map(u => {
                    let _u = { ...u, photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", location: { country: "country", city: "city" }, id: _id };
                    _id++;
                    return _u
                })
                this.props.setUsers(_users)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} />}

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)