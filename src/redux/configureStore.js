// eslint-disable-next-line import/no-extraneous-dependencies
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import dragonReducer, { fetchDragonMiddleware } from './dragons/dragons';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rocketsReducer, missionsReducer, dragonReducer,
});
const composeEnchancer = compose(applyMiddleware(logger, thunk),
  applyMiddleware(fetchDragonMiddleware));
const store = createStore(reducer, composeEnchancer);

export default store;
