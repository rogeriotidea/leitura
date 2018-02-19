import React from 'react';
import { SelectField, MenuItem} from 'material-ui';

const CategoriasSelect = ({categorias, categoriaSelecionada, handleSelecionaCategoria}) => {
    return (
        <div>
            <SelectField
                name="category"
                hintText="Informe a categoria"
                fullWidth={true}
                value={categoriaSelecionada}
                autoWidth={true}
                onChange={(event, index, categoriaSelecionada) => handleSelecionaCategoria(categoriaSelecionada)}>
                {categorias.map(cat => (<MenuItem value={cat.path} key={cat.path} primaryText={cat.name} />))}
            </SelectField>
        </div>
    )
}

export default CategoriasSelect;
