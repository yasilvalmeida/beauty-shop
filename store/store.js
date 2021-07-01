import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../services/rootReducer";
import { logger } from "redux-logger";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
