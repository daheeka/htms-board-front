import { combineReducers } from "redux";
import CommonRedux from "./CommonRedux";
import BoardRedux from "./BoardRedux";

const rootReducer = combineReducers({
  // CommonRedux,
  BoardRedux,
});

export default rootReducer;
