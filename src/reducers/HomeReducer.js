
import { LISTAR_CATEGORIAS } from '../actions/ActionsTypes.js';
import { TROCAR_CATEGORIA } from '../actions/ActionsTypes.js';
import { TROCAR_SORT } from '../actions/ActionsTypes.js';

const INITIAL_STATE = {
    categorias: [],
    categoriaSelecionada: '',
    sortBySelected: '-voteScore'
}  

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LISTAR_CATEGORIAS:
            return { ...state, categorias: action.payload }
        case TROCAR_CATEGORIA:
            return { ...state, categoriaSelecionada: action.payload }
        case TROCAR_SORT:
            return { ...state, sortBySelected: action.payload }
        default:
            return state;
    }
}


