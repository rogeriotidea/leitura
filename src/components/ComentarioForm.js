import React, { Component } from 'react';
import { TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
        SalvarComentarioAction
} from '../actions/Actions';

class ComentariosForm extends Component {

    state = {
        id: 0,
        autor: '',
        comentario: '',
        parentId: ''
    }


    componentWillReceiveProps(nextProps) {

        let comentario = nextProps.comentario;

        if (comentario) {
            this.setState({
                id: comentario.id,
                autor: comentario.author,
                comentario: comentario.body
            })
        }
    }

    handleSalvaComentario = (e) => {

        e.preventDefault()

        let comentario = {
            id: this.state.id,
            author: this.state.autor,
            body: this.state.comentario,
            parentId: this.props.post.id
        }

        this.props.SalvarComentarioAction(comentario, this.props.history);

        this.setState({
            autor: '',
            comentario: ''
        })

    }


    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        let { history } = this.props;

        return (
            <div>
                <form className="post-form" onSubmit={this.handleSalvaComentario}>

                <TextField
                    name="autor"
                    floatingLabelText="Autor"
                    floatingLabelFixed={true}
                    fullWidth={true}
                    value={this.state.autor}
                    onChange={(e) => this.handleChange(e)}

                /><br />
                <TextField
                    name="comentario"
                    floatingLabelText="Comentario"
                    floatingLabelFixed={true}
                    multiLine={true}
                    fullWidth={true}
                    value={this.state.comentario}
                    onChange={(e) => this.handleChange(e)}

                /><br />
                <RaisedButton label="GRAVAR COMENTARIO" type="submit" secondary={true} />
                </form>

            </div>
       );
    }
}

const mapStateToProps = state => (
    {
        post: state.PostReducer.post
    }
);


export default withRouter(connect(mapStateToProps, {
    SalvarComentarioAction
})(ComentariosForm));
