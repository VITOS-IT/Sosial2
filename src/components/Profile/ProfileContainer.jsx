import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId){userId = this.props.authorizedUserId}
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
      this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
     
        if (this.props.match.params.userId !== prevProps.match.params.userId)
        this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     isOwner={!this.props.match.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus,savePhoto, saveProfile}),
    withRouter
    // withAuthRedirect
)
(ProfileContainer);