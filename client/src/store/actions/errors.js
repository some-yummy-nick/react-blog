import * as actions from "./index";

export const errors = err => ({type: actions.ERROR, payload: err});
