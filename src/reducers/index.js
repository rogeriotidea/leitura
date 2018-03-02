import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import PostReducer from './PostReducer';
import ComentariosReducer from './ComentariosReducer';

export default combineReducers({
    HomeReducer,
    ComentariosReducer,
    PostReducer
})