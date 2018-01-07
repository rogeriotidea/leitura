import React, { Component } from 'react';
import '../css/App.css';
import { Grid } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Container fluid="true">
                    <Grid padded="horizontally">
                        <Grid.Row>
                            <Grid.Column width={3} textAlign="left">
                                <ListCategories />
                            </Grid.Column>
                            <Grid.Column width={13} textAlign="left">
                                <ListPosts />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>

            </div>
        );
    }
}

export default App;
