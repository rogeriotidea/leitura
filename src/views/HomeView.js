import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { AppBar, MenuItem, SelectField } from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { GridList, GridTile } from 'material-ui/GridList';
import ListarCategorias from '../components/ListarCategorias';
import ListarPosts from '../components/ListarPosts';

import {
  ListarCategoriasAction,
  ListarPostsAction
} from '../actions/Actions';






class HomeView extends Component {
 
    componentDidMount() {
          this.props.ListarCategoriasAction();
          this.props.ListarPostsAction();
    }

    render() {

        let { categorias, posts, history, sortSelected, handleChangeSort } = this.props;

        return (
            <div className="App">
                <AppBar title="Projeto Leitura" showMenuIconButton={false}  /> 
                <Toolbar>
                   <ToolbarGroup>
                      <ToolbarTitle text="Categoria:" />
                       <GridList cols={1} cellHeight={40}>
                          <GridTile >                       
                           <ListarCategorias history={history} 
                            categorias={categorias}></ListarCategorias>
                          </GridTile>
                       </GridList>
                   </ToolbarGroup>

                     <ToolbarGroup>
                      <ToolbarTitle text="Ordenar por:" />
                      <SelectField value={sortSelected} onChange={(event, index, sortSelected) => handleChangeSort(sortSelected)}>
                          <MenuItem value={'-voteScore'} primaryText="Vote Score" />
                          <MenuItem value={'-timestamp'} primaryText="Data" />
                      </SelectField>
                  </ToolbarGroup>
                  </Toolbar>      
                      <GridList cols={1}>  
                        <GridTile>  
                          <ListarPosts history={history} posts={posts}></ListarPosts>
                        </GridTile> 
                    </GridList>                 

            </div>
        );
    }
}

const mapStateToProps = state => (
  {  
   categorias: state.HomeReducer.categorias,
   posts: state.HomeReducer.posts,
   sortSelected: '-voteScore'
  }
);


export default withRouter(connect(mapStateToProps, {
  ListarCategoriasAction,
  ListarPostsAction
})(HomeView));
