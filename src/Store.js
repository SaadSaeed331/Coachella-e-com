import { combineReducers, createStore } from "redux";
import Reducer from "./Reducer";

const store = createStore(
    combineReducers({
        main:Reducer
    })
)

export default store