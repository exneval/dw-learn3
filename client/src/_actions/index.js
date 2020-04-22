import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

export const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
};

export const foundBadWord = () => {
  return { type: FOUND_BAD_WORD };
};
