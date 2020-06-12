import {SET_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "store/actions";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
        case SET_USER:
        case REGISTER_USER:
            return {
                ...action.payload
            };

        case LOGOUT_USER:
            return initialState;

        default:
            return state;
    }
}
