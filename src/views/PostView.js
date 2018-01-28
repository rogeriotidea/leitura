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




class PostView extends Component {
    

    render() {
      

        return (
            <div className="App">
               AAA
            </div>
        );
    }
}

export default PostView;