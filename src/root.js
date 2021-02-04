import { CssBaseline, ThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <CssBaseline />
        <ThemeProvider>
            <Router>
                <Route path="/:application?/:permalinkId?" component={App} />
            </Router>
        </ThemeProvider>
    </Provider>
);

export default Root;
