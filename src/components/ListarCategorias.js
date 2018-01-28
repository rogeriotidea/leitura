import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const ListarCategorias = ({categorias}) => {
	 return (    
	 	<div>
		 {categorias.map(cat => (		    				 
 			 <FlatButton key={cat.name} label={cat.name} primary={true} />
	     ))} 
	   </div>      
 	 )
}

export default ListarCategorias;