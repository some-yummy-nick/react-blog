import {GET_POSTS, GET_POST, DELETE_POST, ADD_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT} from "store/actions";

const initialState = {
    items: null,
    item: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case GET_POST:
            return {
                ...state,
                item: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                items: null
            };
        case EDIT_POST:
            return {
                ...state,
                item: null
            };
        case DELETE_POST:
            return {
                ...state,
                item: null
            };
        case DELETE_COMMENT:
        case ADD_COMMENT:
            return {
                ...state,
                item: action.payload
            };

        default:
            return state;
    }
}
