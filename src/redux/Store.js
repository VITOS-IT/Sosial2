import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";

let store = {

    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 2, message: `It's my first post`, likesCount: 20}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Dasha'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'HO-HO-HO'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: 'ggffgfg'
        }
    },
    _callSubskriber() {
        console.log('rerender')
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubskriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._callSubskriber(this._state)
    }
}
export default store;