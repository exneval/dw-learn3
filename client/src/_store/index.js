import { createStore, combineReducers } from "redux";
import articles from "../_reducers";
import counter from "../_reducers/counter";

// Global states
const rootReducer = combineReducers({
  counter,
  articles,
});

const store = createStore(rootReducer);

export default store;
