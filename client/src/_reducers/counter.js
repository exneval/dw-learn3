import { INCREMENT, DECREMENT } from "../constants/action-types";

// Initial global state
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: action.payload,
      };
    case DECREMENT:
      return {
        number: action.payload,
      };
    default:
      return state;
  }
};

export default counter;
