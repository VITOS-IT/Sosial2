import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";

let reducers = combineReducers({
    profileReducer,
    dialogReducer
})

let store = createStore(reducers);


export default store;