
import './App.css';
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

  return (

    <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>

        <div className="app-wrapper-content">
            <Route path="/dialogs"> <DialogsContainer />  </Route>
            <Route path="/profile/:userId?"> <ProfileContainer />  </Route>
            <Route path="/users"><UsersContainer/></Route>
            <Route path="/login"><Login/></Route>

        </div>
    </div>

  );
}





export default App;
