import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import ListarPosts from '../components/ListarPosts';
import MenuTopo from '../components/MenuTopo';
import RaisedButton from 'material-ui/RaisedButton';
import sortBy from 'sort-by';

import {
    ListarCategoriasAction,
    ListarPostsAction,
    TrocarCategoriaAction,
    TrocarSortAction,
    ExcluirPostAction,
    EditPostAction,
    NovoPostAction
} from '../actions/Actions';


class HomeView extends Component {

    componentDidMount() {
          this.props.ListarCategoriasAction();
          this.props.ListarPostsAction();
          this.props.TrocarCategoriaAction(this.props.match.params.category,null);

    }

    render() {

        let { categorias, categoriaSelecionada, posts, history, sortBySelected } = this.props;

        return (
            <div className="App">

                      <MenuTopo categorias={categorias}
                                categoriaSelecionada={categoriaSelecionada}
                                sortBySelected={sortBySelected}
                                history={history}
                                handleTrocaCategoria={this.props.TrocarCategoriaAction}
                                handleTrocaSort={this.props.TrocarSortAction}
                                exibirOpcaoSort={true} />

                          <br />
                          <RaisedButton label="ADICIONAR NOVO POST" onClick={() => this.props.NovoPostAction(this.props.history) }  primary={true} />

                          <ListarPosts history={history}
                                       posts={posts}
                                       sortBy={sortBySelected}
                                       handlePostEditar={this.props.EditPostAction}
                                       handlePostExcluir={this.props.ExcluirPostAction}
                                       categoriaSelecionada={categoriaSelecionada}></ListarPosts>

                <br />

            </div>
        );
    }
}

const mapStateToProps = state => (
  {
      categoriaSelecionada: state.HomeReducer.categoriaSelecionada,
      categorias: state.HomeReducer.categorias,
      posts: state.PostReducer.posts.sort(sortBy(state.HomeReducer.sortBySelected)).filter(
          x => (state.PostReducer.categoriaSelecionada ? x.category === state.PostReducer.categoriaSelecionada : x.category !== null)),
      sortBySelected: state.HomeReducer.sortBySelected
  }
);


export default withRouter(connect(mapStateToProps, {
    ListarCategoriasAction,
    ListarPostsAction,
    TrocarCategoriaAction,
    TrocarSortAction,
    ExcluirPostAction,
    EditPostAction,
    NovoPostAction
})(HomeView));
