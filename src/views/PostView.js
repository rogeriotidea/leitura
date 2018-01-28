import React, { Component } from 'react';
import { AppBar } from 'material-ui';

class PostView extends Component {
    
  componentDidMount() {
        
  }

    render() {

        let { history } = this.props;

        return (
            <div className="App">
                <AppBar title="Projeto Leitura" showMenuIconButton={false}  /> 
                     POST DETAIL          

            </div>
        );
    }
}

export default PostView;