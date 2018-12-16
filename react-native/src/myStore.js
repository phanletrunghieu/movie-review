import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
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
    compose(applyMiddleware(logger, thunk, middleware))
);

export default myStore;
