

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
            ]
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

    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';

        this._callSubskriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubskriber(this._state);
    },
    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubskriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT' ){
            this._state.profilePage.newPostText = action.newText;
            this._callSubskriber(this._state);
        }
    }




}
export default store;