import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

const reducer = () => {
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;
