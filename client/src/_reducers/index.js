import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
  data: [{ title: "Mengapa aku dilahirkan" }],
  isFail: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    case FOUND_BAD_WORD:
      return {
        ...state,
        isFail: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
