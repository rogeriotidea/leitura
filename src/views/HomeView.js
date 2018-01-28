import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
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

        let { categorias, posts } = this.props;

        return (
            <div className="App">
                <AppBar title="Projeto Leitura" showMenuIconButton={false}  /> 
                     <GridList cols={1} cellHeight={40}>
                        <GridTile >                       
                         <ListarCategorias
                          categorias={categorias}></ListarCategorias>
                        </GridTile>
                     </GridList>
                      <GridList cols={1}>  
                        <GridTile>  
                          <ListarPosts posts={posts}></ListarPosts>
                        </GridTile> 
                    </GridList>                 

            </div>
        );
    }
}

const mapStateToProps = state => (
  {  
   categorias: state.HomeReducer.categorias,
   posts: state.HomeReducer.posts
  }
);


export default withRouter(connect(mapStateToProps, {
  ListarCategoriasAction,
  ListarPostsAction
})(HomeView));
