import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const ListarCategorias = ({history, categorias, categoriaSelecionada, handleTrocaCategoria}) => {
	 return (    
	 	<div>

	 	<FlatButton key='all' label='Todas' primary={categoriaSelecionada!==''}
					onClick={(event) => handleTrocaCategoria('', history)} />
		 {categorias.map(cat => (		    				 
 			 <FlatButton key={cat.path} label={cat.name} primary={categoriaSelecionada!==cat.path}
						 onClick={(event) => handleTrocaCategoria(cat.path, history)} />

		 ))}
	   </div>      
 	 )
}

export default ListarCategorias;