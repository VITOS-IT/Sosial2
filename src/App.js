
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./App.css";
import {Route} from "react-router-dom";

const App = (props) => {
  return (

    <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
            <Route path="/dialogs"> <Dialogs state={props.state.messagesPage} />  </Route>
            <Route path="/profile"> <Profile state={props.state.profilePage}
                                             dispatch={props.dispatch}/>  </Route>

        </div>
    </div>

  );
}





export default App;
