import { combineReducers, createStore } from "redux";
import countReducer from "./reducer";
import colorReducer from "./colorReducer";
const reducer = combineReducers({
    count:countReducer,
    bgColor:colorReducer
})
const store = createStore(reducer)

export default store