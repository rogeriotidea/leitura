import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MenuTopo from '../components/MenuTopo';
import RaisedButton from 'material-ui/RaisedButton';
import Post from '../components/Post';
import { compose } from 'redux'


import {
        ListarCategoriasAction,
        TrocarCategoriaAction,
        EditarPostAction,
        VotarPostAction,
        ExcluirPostAction,
        ListarComentariosAction
} from '../actions/Actions';

class PostView extends Component {
    
  componentDidMount() {

      this.props.ListarCategoriasAction();
      this.props.TrocarCategoriaAction(this.props.match.params.category,null);
      this.props.ListarComentariosAction(this.props.match.params.postId);
      this.props.EditarPostAction(this.props.match.params.postId)

  }


    handleExcluirPost = (id) => {

        let confirm = window.confirm('Confirma ?')

        if(confirm) {
            this.props.ExcluirPostAction(id);
            window.location = '/';
        }
    }


    render() {

        let { post, categorias, comentarios, history, categoriaSelecionada, sortBySelected } = this.props;

        return (
            <div className="App">
                <MenuTopo categorias={categorias}
                          categoriaSelecionada={categoriaSelecionada}
                          sortBySelected={sortBySelected}
                          history={history}
                          exibirOpcaoSort={false}
                          handleTrocaCategoria={this.props.TrocarCategoriaAction}
                />


                <Post post={post}
                      handlePostExcluir={this.handleExcluirPost}
                      votar={this.props.VotarPostAction}
                      comentarios={comentarios}
                      history={history} />

                <br /><br /><br />

                <RaisedButton label="VOLTAR" onClick={() => history.push(`/`)}  primary={true} />


            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        categoriaSelecionada: state.HomeReducer.categoriaSelecionada,
        categorias: state.HomeReducer.categorias,
        comentarios: state.ComentariosReducer.comentarios,
        post: state.PostReducer.post
    }
);

export default compose(withRouter(connect(mapStateToProps, {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    EditarPostAction,
    VotarPostAction,
    ListarComentariosAction,
    ExcluirPostAction
})(PostView)));