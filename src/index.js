import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { store } from './store';
import RouterApp from './router';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
