import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setMe} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.setMe();
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setMe})(HeaderContainer)