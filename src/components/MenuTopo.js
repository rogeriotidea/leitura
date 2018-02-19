import React from 'react'
import { AppBar, MenuItem, SelectField } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import ListarCategorias from '../components/ListarCategorias';
import { GridList, GridTile } from 'material-ui/GridList';
import { If, Then, Else } from 'react-if';


const MenuTopo = ({categorias, history, categoriaSelecionada, sortBySelected, handleTrocaSort, handleTrocaCategoria, exibirOpcaoSort}) => {

    return (
      <div>
      <AppBar title="Projeto Leitura" showMenuIconButton={false}  />
        <Toolbar>
            <ToolbarGroup>
                <ToolbarTitle text="Categoria:" />
                <GridList cols={1} cellHeight={40}>
                    <GridTile>
                        <ListarCategorias history={history}
                            categoriaSelecionada={categoriaSelecionada}
                            categorias={categorias}
                            handleTrocaCategoria={handleTrocaCategoria}
                        ></ListarCategorias>
                    </GridTile>
               </GridList>
           </ToolbarGroup>
            <If condition={exibirOpcaoSort}>
                <Then>
                    <ToolbarGroup>
                    <ToolbarTitle text="Ordenar por:" />
                         <SelectField value={sortBySelected} onChange={(event,index,value) => handleTrocaSort(value)}>
                              <MenuItem value={'-voteScore'} primaryText="Vote Score" />
                              <MenuItem value={'-timestamp'} primaryText="Data" />
                         </SelectField>
                    </ToolbarGroup>
                </Then>
            </If>
        </Toolbar>
      </div>
    )
}

export default MenuTopo