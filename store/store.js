import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../services/rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composedEnhancer = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware(...middlewares)
);

// const middlewares = [thunk];

export const store = createStore(rootReducer, composedEnhancer);

export default store;
