import * as actions from "./index";

export const setErrors = err => ({type: actions.SET_ERRORS, payload: err});

export const clearErrors = () => ({type: actions.CLEAR_ERRORS});
