import React from 'react';
import { Divider } from 'material-ui';
import { Link } from 'react-router-dom'


const style = {
  marginLeft: 15,
};

const ListarPosts = ({posts, handlePostEditar, handlePostExcluir,  categoriaSelecionada, history}) => {

	 return (    
	 	<div>
			{posts.filter(
					x => (categoriaSelecionada ? x.category === categoriaSelecionada : x.category !== null && !x.deleted))
					.map(post => (
					<div key={post.id}>
							  <h2 style={{'textAlign':'center','cursor':'pointer'}} onClick={() => history.push(`/${post.category}/${post.id}`)}>{post.title}</h2>
								<table width="100%">
								<tbody>
									<tr>
										<th width="20%">Categoria: {post.category}</th>
										<th width="20%">Autor:  {post.author}</th>
										<th width="20%">Comentários: {post.commentCount}</th>
										<th width="20%">Votos:
											<button style={{ 'padding': '5px', 'marginLeft':'5px', 'marginRight':'5px' }} onClick={() => this.handleVotar(post.id, 'downVote')}>-1</button>{
												post.voteScore}
											<button style={{ 'padding': '5px', 'marginLeft':'5px' }} onClick={() => this.handleVotar(post.id, 'upVote')}>+1</button></th>
										<th width="20%">

											<button style={{ 'padding': '5px', 'marginRight':'10px' }}><Link to={`/${post.category}/${post.id}`}>Viualizar</Link></button>
											<button style={{ 'padding': '5px', 'marginRight':'10px' }} onClick={() => handlePostEditar(post.id, history)}>Editar</button>
											<button style={{ 'padding': '5px', 'marginRight':'10px' }} onClick={() => handlePostExcluir(post.id)}>Excluir</button>

										</th>
									</tr>
								</tbody>
								</table>
						<Divider inset={true} style={style} />
					</div>
				))}
	   </div>      
 	 )
}

export default ListarPosts;