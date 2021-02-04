import { CssBaseline } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import app from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <CssBaseline />
        <Router>
            <Route path="/:application?/:permalinkId?" component={app} />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;
