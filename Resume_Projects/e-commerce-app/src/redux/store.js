import handleCart from "./cart/reducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  handleCart,
})

const store = createStore(rootReducer)

export default store;