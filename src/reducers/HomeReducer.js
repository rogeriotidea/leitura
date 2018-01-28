
import { LISTAR_CATEGORIAS } from '../actions/ActionsTypes.js';
import { LISTAR_POSTS } from '../actions/ActionsTypes.js';

const INITIAL_STATE = {
    categorias: [],
    posts: [],
    sortBySelected: '-voteScore'
}  

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTAR_CATEGORIAS:
            return { ...state, categorias: action.payload }
        case LISTAR_POSTS:
            return { ...state, posts: action.payload }    
        default:
            return state;
    }
}


