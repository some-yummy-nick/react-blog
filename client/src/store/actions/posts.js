import axios from "axios";

import * as actions from "./index";

export const getPosts = data => async dispatch => {
    try {
        const res = await axios.get("/api/posts");
        dispatch({type: actions.GET_POSTS, payload: res.data});
    } catch (e) {
        dispatch({type: actions.SET_ERRORS, payload: e.response.data})
    }
};
export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${id}`);
        dispatch({type: actions.GET_POST, payload: res.data});
    } catch (e) {
        dispatch({type: actions.SET_ERRORS, payload: e.response.data})
    }
};

export const addPost = (post, history) => async dispatch => {
    try {
        await axios.post(`/api/posts`, post);
        dispatch({type: actions.ADD_POST});
        history.push("/");
    } catch (e) {
        dispatch({type: actions.SET_ERRORS, payload: e.response.data})
    }
};

export const editPost = (id, post, history) => async dispatch => {
    try {
        await axios.put(`/api/posts/${id}`, post);
        dispatch({type: actions.EDIT_POST});
        history.push(`/post/${id}`);
    } catch (e) {
        dispatch({type: actions.SET_ERRORS, payload: e.response.data})
    }
};

export const deletePost = (id, history) => async dispatch => {
    try {
        await axios.delete(`/api/posts/${id}`);
        dispatch({type: actions.DELETE_POST, payload: id});
        history.replace("/");
    } catch (e) {
        dispatch({type: actions.SET_ERRORS, payload: e.response.data})
    }
};
