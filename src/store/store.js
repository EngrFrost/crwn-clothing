import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
const middleWares = [logger, thunk];

const loggerMiddlware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log();
};
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
