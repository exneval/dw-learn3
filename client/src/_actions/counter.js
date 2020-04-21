import { INCREMENT, DECREMENT } from "../constants/action-types";

// Actions
export const actionINC = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const actionDEC = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
