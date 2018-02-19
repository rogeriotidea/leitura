import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import PostView from '../views/PostView';
import PostFormView from '../views/PostFormView';

class RouterApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/post/edit/:postId" component={PostFormView} />
                <Route path="/post/new" component={PostFormView} />

                <Route path="/:category/:postId" component={PostView} />
                <Route path="/:category" component={HomeView} />

            </Switch>
        )
    }
}
export default RouterApp
