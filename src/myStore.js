import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import rootReducer from "./reducers";

let logger = createLogger({
  timestamps: true,
  duration: true
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigationData,
);

const myStore = createStore(
  rootReducer,
  compose(applyMiddleware(logger, middleware))
);

export default myStore;