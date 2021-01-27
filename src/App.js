import './App.css';
import React, { Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Route path="/dialogs"> <DialogsContainer/> </Route>
                    </Suspense>

                    <Route path="/profile/:userId?"> <ProfileContainer/> </Route>
                    <Route path="/users"><UsersContainer/></Route>
                    <Route path="/login"><Login/></Route>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = () =>{
   return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default SamuraiJSApp