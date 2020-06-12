import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import reducer from "./reducers";
import js_cookie from "js-cookie";
import jwt_decode from "jwt-decode";
import {setUser,logoutUser} from "store/actions/auth";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

const jwt = js_cookie.get("jwt");
if (jwt) {
    const decoded = jwt_decode(jwt);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
    }
    store.dispatch(setUser(decoded));
}
export default store;
