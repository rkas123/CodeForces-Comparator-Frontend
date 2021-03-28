import { combineReducers } from "redux";
import themeReducer from "./themeReducer.js";

export default combineReducers({
  theme: themeReducer,
});
