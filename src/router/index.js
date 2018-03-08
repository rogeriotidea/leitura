import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import PostView from '../views/PostView';
import PostFormView from '../views/PostFormView';
import ComentarioFormView from '../views/ComentarioFormView';
import PageNotFoundView from '../views/PageNotFoundView';


class RouterApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/post/edit/:postId" component={PostFormView} />
                <Route path="/post/new" component={PostFormView} />
                <Route path="/comentario/edit/:comentarioId" component={ComentarioFormView} />

                <Route path="/:category/:postId" component={PostView} />
                <Route path="/:category" component={HomeView} />
                <Route path='/' component={PageNotFoundView} />


            </Switch>
        )
    }
}
export default RouterApp
