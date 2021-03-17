import {setMe} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
   initialized: false
}

const appReducer = (state = initialState, action: InitialActionType):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,

            }

        default:
            return state;
    }
}

export const initializedSuccess = (): InitialActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setMe());

    Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess());
    });
}
type InitialActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export default appReducer;