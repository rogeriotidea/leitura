import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MenuTopo from '../components/MenuTopo';
import ComentarioForm from '../components/ComentarioForm'
import RaisedButton from 'material-ui/RaisedButton';


import {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    EditarComentarioAction,
    RetornaComentarioAction
} from '../actions/Actions';

class ComentarioFormView extends Component {

    state = {
        comentario: ''
    }

    componentDidMount() {

        if (this.props.match.params.comentarioId){
            this.props.RetornaComentarioAction(this.props.match.params.comentarioId)
        }
    }

    componentWillReceiveProps(nextProps) {

        let comentario = nextProps.comentario;

        this.setState({
            comentario: comentario
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

                <ComentarioForm comentario={this.state.comentario} history={history} />
                <br />

                <RaisedButton label="VOLTAR" onClick={() => history.goBack()}  primary={true} />


            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        categorias: state.HomeReducer.categorias,
        comentario: state.ComentariosReducer.comentario

    }
);

export default withRouter(connect(mapStateToProps, {
    ListarCategoriasAction,
    TrocarCategoriaAction,
    EditarComentarioAction,
    RetornaComentarioAction
})(ComentarioFormView));