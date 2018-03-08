import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class PageNotFoundView extends Component {


    render() {

        return (
            <div className="App">
                <p>Conteudo Nao Disponivel</p>
            </div>
        );
    }
}

const mapStateToProps = state => (
  {
       }
);


export default withRouter(connect(mapStateToProps, {

})(PageNotFoundView));
