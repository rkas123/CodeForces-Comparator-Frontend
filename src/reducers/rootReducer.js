import { combineReducers } from "redux";
import themeReducer from "./themeReducer.js";
import tabReducer from "./tabReducer.js";
export default combineReducers({
  theme: themeReducer,
  tab: tabReducer,
});
