import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose} from "redux";
import logger from "redux-logger";
import { todoReducer } from "./reducers/Todo";

export default function createStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = reduxCreateStore(
    combineReducers({
      todo: todoReducer,
    }),
    composeEnhancers(
    applyMiddleware(
      logger,
    ))
  );
  return store;
}