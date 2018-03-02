import { LISTAR_COMENTARIOS } from '../actions/ActionsTypes';
import { VOTAR_COMENTARIO } from '../actions/ActionsTypes'
import { LIMPAR_FORM_COMENTARIO } from '../actions/ActionsTypes'
import { EDITAR_COMENTARIO } from '../actions/ActionsTypes'


const INITIAL_STATE = {
    comentarios: [],
    comentario: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTAR_COMENTARIOS:
            return { ...state, comentarios: action.payload }
        case VOTAR_COMENTARIO:
            return {
                ...state,
                posts: state.comentarios.map(comentario => {
                    if(comentario.id === action.id) {
                        comentario.voteScore = comentario.voteScore + action.voto

                    }
                    return comentario;
                })
        }
        case LIMPAR_FORM_COMENTARIO:
            return {
                ...state,
                comentario: {}
        }
        case EDITAR_COMENTARIO:
            return {
                ...state,
                comentario: action.comentario
            }
        default:
            return state;
    }
}


