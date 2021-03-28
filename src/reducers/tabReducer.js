import { TOGGLE_TAB } from "../constants/actionTypes.js";

const tabReducer = (state = 0, action) => {
  switch (action.type) {
    case TOGGLE_TAB:
      return action.payload.tabIndex;
    default:
      return state;
  }
};

export default tabReducer;
