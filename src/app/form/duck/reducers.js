import types from "./types";

const INITIAL_STATE = {
    name: '',
    email: '',
    message: ''
};

const  formReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {

        case types.ADD_NAME:
            return {
                ...state, name: action.item
            };

        case types.ADD_EMAIL:
            return {
                ...state, email: action.item
            };
        case types.ADD_MESSAGE :
            return {
                ...state, message: action.item
            };
        default:
            return state
    }
};

export default formReducer