import { POST_TROCAR_CATEGORIA } from '../actions/ActionsTypes.js';
import { EXCLUIR_POST } from '../actions/ActionsTypes.js';
import { LISTAR_POSTS } from '../actions/ActionsTypes.js';
import { EDITAR_POST } from '../actions/ActionsTypes.js';
import { LIMPAR_FORM } from '../actions/ActionsTypes.js';
import { VOTAR_POST } from '../actions/ActionsTypes.js';
import { VOTAR_POST_VIEW } from '../actions/ActionsTypes.js';

const INITIAL_STATE = {
    categoriaSelecionada: '',
    posts: [],
    post: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTAR_POSTS:
            return { ...state, posts: action.payload }
        case POST_TROCAR_CATEGORIA:
            return { ...state, categoriaSelecionada: action.payload }
        case EXCLUIR_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        case EDITAR_POST:
            return {
                ...state,
                post: action.post
            }
        case LIMPAR_FORM:
            return {
                ...state,
                post: {}
            }
        case VOTAR_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.id) {
                        post.voteScore = post.voteScore + action.voto

                    }
                    return post;
                })
            }
        case VOTAR_POST_VIEW:
            return {
                ...state,
                post: {
                    ...state.post,
                    voteScore: state.post.voteScore + action.voto
                }
            }
        default:
            return state;
    }
}


