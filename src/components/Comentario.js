import React from 'react';
import moment from 'moment';
import FlatButton from 'material-ui/FlatButton';


const Comentario = ({comentario, handleComentarioEditar, handleComentarioExcluir, votarComentario, history}) => {
	  return (
            <div>
                {comentario.body}<br />
                <strong>{comentario.author} - {moment(comentario.timestamp).format('DD/MM/YYYY')}</strong><br /><br />
                <button style={{ 'padding': '5px', 'marginLeft':'5px', 'marginRight':'5px' }} onClick={() => votarComentario(comentario, 'downVote')} >-1</button>
                {comentario.voteScore} voto(s)
                <button style={{ 'padding': '5px', 'marginLeft':'5px' }} onClick={() => votarComentario(comentario, 'upVote')} >+1</button>

                <FlatButton label="EDITAR" secondary={true} onClick={() => handleComentarioEditar(comentario, history)} />
                <FlatButton label="EXCLUIR" primary={true} onClick={() => handleComentarioExcluir(comentario)} />
                <hr />

            </div>
      )
}

export default Comentario;
