
import {
    LISTAR_CATEGORIAS,
    LISTAR_POSTS,
    TROCAR_CATEGORIA,
    TROCAR_SORT,
    POST_TROCAR_CATEGORIA,
    EXCLUIR_POST,
    EDITAR_POST,
    LIMPAR_FORM,
    VOTAR_POST,
    VOTAR_POST_VIEW,
    LISTAR_COMENTARIOS,
    LIMPAR_FORM_COMENTARIO,
    EDITAR_COMENTARIO
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
        dispatch({ type: POST_TROCAR_CATEGORIA, payload: categoria });
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
            (response) => {
                if (!response.id) {
                    alert ('Conteudo nao disponivel');
                    window.location='/';
                }
                dispatch(EditarPost(response))
            }
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

export function VotarPostAction(id, tipovoto, postIndividual) {

    let voto = (tipovoto === 'upVote') ? 1 : -1

    return (dispatch) => {
        Api.votePost(id,tipovoto ).then(
            (response) => { dispatch(votar(id, tipovoto, voto, postIndividual )) }
        )
    }
}

export function votar(id, tipopovo, voto, postIndividual) {

    let tipo;

    if (postIndividual){
        tipo = VOTAR_POST_VIEW;
    }
    else{
        tipo = VOTAR_POST;
    }
    return {
        type: tipo,
        id,
        voto
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


    let inserirPost = false;
    let erros = false;

    if (!post.id) {
        inserirPost = true;
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

export function ListarComentariosAction(id){

    return (dispatch) => {
        Api.getComentarios(id).then(
            (response) => {
                dispatch( {type: LISTAR_COMENTARIOS, payload: response} )}
        )
    }
}

export function SalvarComentarioAction(comentario, history){


    let inserirComentario = false;
    let erros = false;

    if (!comentario.id) {
        inserirComentario = true;
        comentario.id = uuid.v1();
    }

    for (let prop in comentario) {
        if (comentario[prop] === null || comentario[prop] === "") {
            erros = true;
        }
    }


    return dispatch => {
        if (!erros) {
            if (inserirComentario) {

                Api.salvarComentario(comentario).then(comentario => {
                    dispatch(ListarComentariosAction(comentario.parentId))
                });

            } else {

                Api.editarComentario(comentario).then(comentario => {
                    if (history) {
                        history.goBack();
                    }
                });
            }
        }
        else{
            alert('Preecha todos os campos !');
        }
    }

}

export const ExcluirComentarioAction = comentario => {
    return (dispatch) => {
        Api.excluirComentario(comentario.id).then(
            () => dispatch(ListarComentariosAction(comentario.parentId))
        )
    }
}


export const VotarComentarioAction = (comentario, tipovoto) => {

    return (dispatch) => {
        Api.voteComentario(comentario.id,tipovoto).then(
            (response) => { dispatch(ListarComentariosAction(comentario.parentId))}
        )
    }

}

export const EditarComentarioAction = (comentario, history) => {

    return dispatch => {
        dispatch({ type: LIMPAR_FORM_COMENTARIO });
        if (history) {
            history.push(`/comentario/edit/`+comentario.id);
        }
    }

}


export function RetornaComentario(comentario) {

    return {
        type: EDITAR_COMENTARIO,
        comentario
    }
}

export function RetornaComentarioAction(id) {
    return (dispatch) => {
        Api.retornaComentario(id).then(
            (response) => dispatch(RetornaComentario(response))
        )
    }
}
