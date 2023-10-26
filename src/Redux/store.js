import reducer from "./reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk';

let reducerRoot = combineReducers({ reducer });
let middleWare = [thunk]
const store = legacy_createStore(reducerRoot, applyMiddleware(...middleWare));
export { store };