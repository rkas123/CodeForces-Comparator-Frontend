import { TOGGLE_THEME } from "../constants/actionTypes.js";

const themeReducer = (state = 1, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return (state + 1) % 2;
    default:
      return state;
  }
};

export default themeReducer;
