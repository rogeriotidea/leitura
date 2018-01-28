import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import PostView from '../views/PostView';
class RouterApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/:category/:postId" component={PostView} />

            </Switch>
        )
    }
}
export default RouterApp
