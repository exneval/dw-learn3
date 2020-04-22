import { GET_USERS, POST_USER } from "../constants/action-types";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
    case `${POST_USER}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `${GET_USERS}_FULFILLED`:
    case `${POST_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case `${GET_USERS}_REJECTED`:
    case `${POST_USER}_REJECTED`:
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
