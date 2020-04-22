import { GET_POSTS } from "../constants/action-types";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_POSTS}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_POSTS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case `${GET_POSTS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
