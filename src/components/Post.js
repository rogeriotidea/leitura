import React from 'react';
import moment from 'moment';
import ListarComentarios from '../components/ListarComentarios';

import RaisedButton from 'material-ui/RaisedButton';

const Post = ({post, votar, history, handlePostExcluir, comentarios }) => {
	return (
			<div>
				<h1>{post.title}</h1>
				<span><strong>Autor: </strong>{post.author}</span><br />
				<span><strong>Categoria: </strong>{post.category}</span><br />
				<span><strong>Data/Hora: </strong>{moment(post.timestamp).format('DD/MM/YYYY')}</span><br />
				<span><strong>Total Comentarios: </strong>{post.commentCount}</span><br />
				<span><strong>Vote Score: </strong>
					<button style={{ 'padding': '5px', 'marginLeft':'5px', 'marginRight':'5px' }} onClick={() => votar(post.id, 'downVote', 1)}>-1</button>{
                    post.voteScore}
					<button style={{ 'padding': '5px', 'marginLeft':'5px' }} onClick={() => votar(post.id, 'upVote', 1)}>+1</button></span><br />
				<hr />
				{post.body}
				<hr />

				<RaisedButton label="EDITAR" onClick={() => history.push(`/post/edit/`+post.id)}  secondary={true} />
				<RaisedButton label="EXCLUIR" onClick={() => handlePostExcluir(post.id)}  primary={true} />
				<br />
				<h3>Comentários</h3>

				<ListarComentarios
					comentarios={comentarios}
					post={post}
				/>


			</div>
	)
}

export default Post;