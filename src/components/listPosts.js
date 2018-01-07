import React, { Component } from 'react';
import Post from './post';

class ListPosts extends Component {
    render() {
        return (
            <div>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        );
    }
}

export default ListPosts;
