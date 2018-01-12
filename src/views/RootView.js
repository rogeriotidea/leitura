import React, { Component } from 'react';
import '../css/App.css';
import * as Colors from 'material-ui/styles/colors';
import { AppBar } from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';


import Menu from '../components/menu'
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'


class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar title="Projeto Leitura - Udacity" showMenuIconButton={false}  />

                 <GridList cols={2.2}>

                     <GridTile>
                         1
                     </GridTile>
                     <GridList>


            </div>
        );
    }
}

export default App;
