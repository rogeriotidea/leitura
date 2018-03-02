import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import Comentario from '../components/Comentario'
import ComentarioForm from '../components/ComentarioForm'

import { ExcluirComentarioAction, VotarComentarioAction, EditarComentarioAction } from '../actions/Actions';

class ListarComentarios extends Component {

    handleComentarioExcluir = (comentario) => {

        let confirm = window.confirm('Confirma ?')

        if(confirm) {
            this.props.ExcluirComentarioAction(comentario);
        }

    }

    handleComentarioEditar = (comentario, history) => {

        this.props.EditarComentarioAction(comentario, history);

    }

    votarComentario = (comentario, tipovoto) => {

    	this.props.VotarComentarioAction(comentario, tipovoto);

	}

	render() {

        let {comentarios, post, history} = this.props

        return (
            <div>
                {comentarios.map(comentario => (
                    <div key={comentario.id}>
                        <Comentario history={history} comentario={comentario} handleComentarioExcluir={this.handleComentarioExcluir}
                                    handleComentarioEditar={this.handleComentarioEditar} votarComentario={this.votarComentario}/>
                    </div>
                ))}


                <h3>Novo Comentário:</h3>

                <ComentarioForm />


            </div>
        )
    }
}

const mapStateToProps = state => ({
    comentarios: state.ComentariosReducer.comentarios

});


export default withRouter(connect(mapStateToProps, {
        ExcluirComentarioAction,
        VotarComentarioAction,
        EditarComentarioAction
})(ListarComentarios));