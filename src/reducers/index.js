import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import PostReducer from './PostReducer';

export default combineReducers({
    HomeReducer,
    PostReducer
})