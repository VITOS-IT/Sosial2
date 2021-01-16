import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
    postData: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: `It's my first post`, likesCount: 20},
        {id: 3, message: `It's my firstassda post`, likesCount: 25}
    ]
}

it('length of post should be incremented', ()=> {
    let action = addPostActionCreator('it-kp.kom');
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(4);
    expect(newState.postData[2].message).toBe('it-kp.kom');

})
it('post text should be correct', ()=> {
    let action = addPostActionCreator('it-kp.kom');
    let newState = profileReducer(state, action);

    expect(newState.postData[3].message).toBe('it-kp.kom');

})

it('after deleting length should be decremented', ()=> {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.postData.length).toBe(2);

})