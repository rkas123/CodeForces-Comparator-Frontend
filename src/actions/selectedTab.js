import { TOGGLE_TAB } from "../constants/actionTypes.js";

export const selectedTab = (value) => {
  return {
    type: TOGGLE_TAB,
    payload: {
      tabIndex: value,
    },
  };
};
