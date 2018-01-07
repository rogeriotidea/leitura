import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RootView from '../views/RootView';

class RouterApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={RootView} />

            </Switch>
        )
    }
}
export default RouterApp
