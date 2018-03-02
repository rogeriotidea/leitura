import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MenuTopo from '../components/MenuTopo';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';
import { SelectField, MenuItem} from 'material-ui';

import {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    TrocarCategoriaPostAction,
    SalvarPostAction,
    EditarPostAction
} from '../actions/Actions';

class PostFormView extends Component {

    state = {
        id: 0,
        titulo: '',
        autor: '',
        descricao: '',
        categoria: ''
    }

    componentDidMount() {

        this.props.ListarCategoriasAction();
        this.props.TrocarCategoriaPostAction(this.props.match.params.category,null);

        if (this.props.match.params.postId){
            this.props.EditarPostAction(this.props.match.params.postId)
        }
    }


    componentWillReceiveProps(nextProps) {

        let post = nextProps.post;

        if (post) {
            this.setState({
                id: post.id,
                titulo: post.title,
                autor: post.author,
                categoria: post.category,
                descricao: post.body
            })
        }
    }

    handleSalvaPost = (e) => {

        e.preventDefault()

        let post = {
            id: this.state.id,
            title: e.target.titulo.value,
            category: this.state.categoria,
            timestamp: Date.now(),
            author: e.target.autor.value,
            body: e.target.descricao.value
        }


        this.props.SalvarPostAction(post, this.props.history);

    }


    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSelectChange = (event, index, value) => {

        this.setState({
            categoria: value
        })
    }


    render() {
        
        let { categorias, history, categoriaSelecionada, sortBySelected } = this.props;

        return (
            <div className="App">

                <MenuTopo categorias={categorias}
                          categoriaSelecionada={categoriaSelecionada}
                          sortBySelected={sortBySelected}
                          history={history}
                          exibirOpcaoSort={false}
                          handleTrocaCategoria={this.props.TrocarCategoriaAction}
                />

                <form className="post-form" onSubmit={this.handleSalvaPost}>

                <TextField
                    name="titulo"
                    floatingLabelText="Titulo"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    value={this.state.titulo}
                    onChange={(e) => this.handleChange(e)}


                /><br />
                <TextField
                    name="descricao"
                    floatingLabelText="Conteúdo"
                    floatingLabelFixed={true}
                    multiLine={true}
                    fullWidth={true}
                    value={this.state.descricao}
                    onChange={(e) => this.handleChange(e)}


                /><br />
                <TextField
                    name="autor"
                    floatingLabelText="Autor"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    value={this.state.autor}
                    onChange={(e) => this.handleChange(e)}
                />
                <br /><br />

                    <SelectField
                        name="categoria"
                        hintText="Informe a categoria"
                        fullWidth={true}
                        value={this.state.categoria}
                        autoWidth={true}
                        onChange={this.handleSelectChange}>
                        {categorias.map(cat => (<MenuItem value={cat.path} key={cat.path} primaryText={cat.name} />))}
                    </SelectField>

                <RaisedButton label="GRAVAR" type="submit" secondary={true} />
                <br />
                </form>

                <RaisedButton label="VOLTAR" onClick={() => history.push(`/`)}  primary={true} />

            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        categorias: state.HomeReducer.categorias,
        post: state.PostReducer.post
    }
);

export default withRouter(connect(mapStateToProps, {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    TrocarCategoriaPostAction,
    SalvarPostAction,
    EditarPostAction
})(PostFormView));