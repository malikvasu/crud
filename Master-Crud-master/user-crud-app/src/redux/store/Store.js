import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "../reducers/UserReducer";

const Store = createStore(UserReducer, composeWithDevTools());

export default Store;
