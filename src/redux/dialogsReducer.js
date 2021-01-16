const ADD_MESSAGE = 'samurai-net/dialog/ADD-MESSAGE';


let initialState = {
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

}


export const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length+1,
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],

            }
        default:
            return state;

    }
}

export const addMessageActionCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText:newMessageText
    }
}
export default dialogReducer;