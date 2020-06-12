import {SET_USER, LOGIN_USER, LOGOUT_USER} from "store/actions";

const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}
