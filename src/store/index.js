import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../reducers';
import ReduxThunk from 'redux-thunk';

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger))