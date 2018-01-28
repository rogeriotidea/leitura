
import {
    LISTAR_CATEGORIAS,
    LISTAR_POSTS
} from './ActionsTypes';

import * as Api from '../api/FuncoesApi.js';

export const ListarCategoriasAction = () => {
    return dispatch => {
        Api.getCategorias().then(categorias => {
            dispatch({ type: LISTAR_CATEGORIAS, payload: categorias })
        });
    }
}

export const ListarPostsAction = () => {
    return dispatch => {
        Api.getPosts().then(posts => {
            dispatch({ type: LISTAR_POSTS, payload: posts })
        });
    }
}