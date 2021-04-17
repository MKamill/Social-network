import React from "react";
import Profile from "./Profile";
import { getUserProfile } from '../../redux/profile-reducer'
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);