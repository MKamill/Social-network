import axios from 'axios'
import React from "react";
import { connect } from "react-redux";
import { usersAPI } from '../../api/api';
import { toggleFollowingProgress, follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../redux/users-reducer";
import Preloader from '../common/preloader/Preloader';
import Users from './Users'
class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.toggleIsFetching(false);
                    let _users = data.items.map(u => {
                        let _u = { ...u, photoURL: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg", location: { country: "country", city: "city" } };
                        return _u
                    })
                    this.props.setUsers(_users);
                    this.props.setTotalUsersCount(data.totalCount - Math.ceil((data.totalCount / 100) * 99.9));
                })
        }
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNum, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                let _id = 1;
                let _users = data.items.map(u => {
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
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
})(UsersContainer)