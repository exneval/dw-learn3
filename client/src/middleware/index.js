import logger from "redux-logger";
import promise from "redux-promise-middleware";

import { ADD_ARTICLE } from "../constants/action-types";
import { foundBadWord } from "../_actions";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          return dispatch(foundBadWord());
        }
      }
      return next(action);
    };
  };
};

export { logger, promise };
