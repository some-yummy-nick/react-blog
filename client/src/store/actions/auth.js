import axios from "axios";
import * as actions from "./index";
import js_cookie from "js-cookie";

export const setUser = user => ({type: actions.SET_USER, payload: user});

export const loginUser = data => async dispatch => {
    try {
        const res = await axios.post("/api/users/login", data);
        dispatch({type: actions.LOGIN_USER, payload: res.data.user});
    } catch (e) {
        dispatch({type: actions.ERROR, payload: e.response.data})
    }

};

export const logoutUser = () => {
    js_cookie.remove("jwt");
    return {type: actions.LOGOUT_USER};
};
