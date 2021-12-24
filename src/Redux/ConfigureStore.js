import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import CategoryReducer from './Reducer/CategoryReducer';
import IntroReducer from './Reducer/IntroReducer';

const middlewareList = [thunk, logger];

const reducer = combineReducers({
  CategoryReducer,
  IntroReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(...middlewareList),
);

export default store;
