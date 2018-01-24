import React, { Component } from 'react';
import '../css/App.css';
import { AppBar } from 'material-ui';
import {GridList, GridTile} from 'material-ui/GridList';

import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'


class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar title="Projeto Leitura" showMenuIconButton={false}  />

                     <GridList cols={6.2}>
                        <GridTile>
                           <ListCategories />
                         </GridTile>
                         <GridTile>
                           <ListPosts />
                         </GridTile>
                     </GridList>


            </div>
        );
    }
}

export default App;
