import {applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import checkStock from "./middlewares/checkStock";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(checkStock)));

export default store;