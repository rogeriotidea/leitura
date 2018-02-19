import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MenuTopo from '../components/MenuTopo';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';
import CategoriasSelect from '../components/CategoriasSelect';

import {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    TrocarCategoriaPostAction,
    SalvarPostAction,
    EditarPostAction,
    PostHandleChangeAction
} from '../actions/Actions';

class PostFormView extends Component {

    componentDidMount() {

        this.props.ListarCategoriasAction();
        this.props.TrocarCategoriaPostAction(this.props.match.params.category,null);

        if (this.props.match.params.postId){
            this.props.EditarPostAction(this.props.match.params.postId)
        }
    }

    handleSalvaPostagem = (e) => {

        e.preventDefault()

        let post = {
            id: this.props.match.params.id,
            title: e.target.titulo.value,
            category: this.props.categoriaSelecionada,
            timestamp: Date.now(),
            author: e.target.autor.value,
            body: e.target.descricao.value
        }

        this.props.SalvarPostAction(post, this.props.history);

    }


    render() {
        
        let { post, categorias, history, categoriaSelecionada, sortBySelected } = this.props;

        return (
            <div className="App">

                <MenuTopo categorias={categorias}
                          categoriaSelecionada={categoriaSelecionada}
                          sortBySelected={sortBySelected}
                          history={history}
                          exibirOpcaoSort={false}
                          handleTrocaCategoria={this.props.TrocarCategoriaAction}
                />

                <form className="post-form" onSubmit={this.handleSalvaPostagem}>

                <TextField
                    name="titulo"
                    floatingLabelText="Titulo"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    value={post.title}
                    onChange={this.props.postHandleChangeAction}


                /><br />
                <TextField
                    name="descricao"
                    floatingLabelText="Conteúdo"
                    floatingLabelFixed={true}
                    multiLine={true}
                    fullWidth={true}
                    value={post.body}
                    onChange={this.props.postHandleChangeAction}


                /><br />
                <TextField
                    name="autor"
                    floatingLabelText="Autor"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    value={post.author}
                    onChange={this.props.postHandleChangeAction}


                />
                <br /><br />
                <CategoriasSelect categorias={categorias} name="categoria"
                                  categoriaSelecionada={post.category}
                                  handleSelecionaCategoria={this.props.TrocarCategoriaPostAction}
                />

                <RaisedButton label="GRAVAR" type="submit" secondary={true} />
                <br /><br />
                </form>

                <RaisedButton label="VOLTAR" onClick={() => history.push(`/`)}  primary={true} />

            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        categoriaSelecionada: state.PostReducer.categoriaSelecionada,
        categorias: state.HomeReducer.categorias,
        post: state.PostReducer.post
    }
);

export default withRouter(connect(mapStateToProps, {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    TrocarCategoriaPostAction,
    SalvarPostAction,
    EditarPostAction,
    PostHandleChangeAction
})(PostFormView));