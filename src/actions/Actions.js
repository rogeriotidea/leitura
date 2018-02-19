
import {
    LISTAR_CATEGORIAS,
    LISTAR_POSTS,
    TROCAR_CATEGORIA,
    TROCAR_SORT,
    POST_TROCAR_CATEGORIA,
    EXCLUIR_POST,
    EDITAR_POST,
    LIMPAR_FORM,
    FORM_CHANGE
} from './ActionsTypes';

import uuid from 'uuid';
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


export const TrocarSortAction = (sortBy) => {
    return dispatch => {
        dispatch({ type: TROCAR_SORT, payload: sortBy });
    }
}

export const TrocarCategoriaAction = (categoria, history) => {
    return dispatch => {
        dispatch({ type: TROCAR_CATEGORIA, payload: categoria });
        if (history) {
            history.push(`/${categoria}`);
        }
    }
}


export const TrocarCategoriaPostAction = category => {
    return {
        type: POST_TROCAR_CATEGORIA
        , payload: category
    }
}

export function ExcluirPost(id) {
    return {
        type: EXCLUIR_POST,
        id
    }
}

export const ExcluirPostAction = postID => {
    return (dispatch) => {
        Api.excluirPost(postID).then(
            () => dispatch(ExcluirPost(postID))
        )
    }
}

export function EditarPost(post) {
    return {
        type: EDITAR_POST,
        post
    }
}

export function EditarPostAction(id) {
    return (dispatch) => {
        Api.retornaPost(id).then(
            (response) => dispatch(EditarPost(response))
        )
    }
}


export function EditPostAction(id, history) {

    return dispatch => {
        dispatch({ type: LIMPAR_FORM });
        if (history) {
            history.push(`/post/edit/`+id);
        }
    }

}

export function NovoPostAction(history) {

    return dispatch => {
        dispatch({ type: LIMPAR_FORM });
        if (history) {
            history.push(`/post/new`);
        }
    }

}

export function SalvarPostAction(post,history) {

    let inserirPost = true;
    let erros = false;

    if (!post.id) {
        inserirPost = false;
        post.id = uuid.v1();
    }

    for (let prop in post) {
        if (post[prop] === null || post[prop] === "") {
            erros = true;
        }
    }

    return dispatch => {
        if (!erros) {
            if (inserirPost) {
                Api.criarNovoPost(post).then(post => {
                    if (history) {
                        history.push(`/`);
                    }
                });
            } else {
                Api.editarPost(post).then(post => {
                    if (history) {
                        history.push(`/`);
                    }
                });
            }
        }
        else{
            alert('Preecha todos os campos !');
        }
    }
}

export const PostHandleChangeAction = (event) => {
    return {
        type: FORM_CHANGE
        , field: event.target.name
        , payload: event.target.value
    }
}