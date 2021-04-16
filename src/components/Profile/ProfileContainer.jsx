import React from "react";
import Profile from "./Profile";
import axios from 'axios'
import { setUserProfile } from '../../redux/profile-reducer'
import { connect } from "react-redux";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId 
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        debugger
        this.props.setUserProfile(response.data);
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(withURLDataContainerComponent);
