import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const ListarCategorias = ({history, categorias}) => {
	 return (    
	 	<div>
	 	<FlatButton key='all' label='Todas' primary={true} onClick={() => history.push(`/`)} />

		 {categorias.map(cat => (		    				 
 			 <FlatButton key={cat.name} label={cat.name} primary={true} onClick={() => history.push(`/`)} />
	     ))} 
	   </div>      
 	 )
}

export default ListarCategorias;