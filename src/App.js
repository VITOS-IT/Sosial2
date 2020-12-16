
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {

  return (

    <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
            <Route path="/dialogs"> <DialogsContainer />  </Route>
            <Route path="/profile"> <Profile />  </Route>
            <Route path="/users"><UsersContainer/></Route>

        </div>
    </div>

  );
}





export default App;
