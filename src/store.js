import { createStore } from "redux";
import bugReducer from "./reducers/bugReducer";


//createStore is a higher-order function
const store = createStore(bugReducer)

export default store