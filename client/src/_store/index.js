import { createStore, combineReducers, applyMiddleware } from "redux";
import articles from "../_reducers";
import counter from "../_reducers/counter";
import posts from "../_reducers/post";
import users from "../_reducers/user";

import { forbiddenWordsMiddleware, logger, promise } from "../middleware";

const middleware = [forbiddenWordsMiddleware, logger, promise];

// Global states
const rootReducer = combineReducers({
  counter,
  articles,
  posts,
  users,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
