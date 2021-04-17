import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { getUsers, toggleFollowingProgress, follow, unfollow } from "../../redux/users-reducer";
import Preloader from '../common/preloader/Preloader';
import Users from './Users'
class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
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

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, getUsers, toggleFollowingProgress
    }),
    WithAuthRedirect
)(UsersContainer);