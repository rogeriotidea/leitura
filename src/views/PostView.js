import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import MenuTopo from '../components/MenuTopo';
import RaisedButton from 'material-ui/RaisedButton';

import {
        ListarCategoriasAction,
        TrocarCategoriaAction
} from '../actions/Actions';

class PostView extends Component {
    
  componentDidMount() {
      this.props.ListarCategoriasAction();
      this.props.TrocarCategoriaAction(this.props.match.params.category,null);

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

                POST

                <br /><br /><br />

                <RaisedButton label="EDITAR POST" onClick={() => history.push(`/posts/edit/1`)}  secondary={true} />
                <br /><br />
                <RaisedButton label="VOLTAR" onClick={() => history.push(`/`)}  primary={true} />

            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        categoriaSelecionada: state.HomeReducer.categoriaSelecionada,
        categorias: state.HomeReducer.categorias
    }
);

export default withRouter(connect(mapStateToProps, {
    ListarCategoriasAction,
    TrocarCategoriaAction
})(PostView));