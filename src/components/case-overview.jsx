import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { CaseList } from './case-list';
import { makeStyles } from '@material-ui/core';
import store from '../store/store';

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
    },
});

export const CaseOverview = () => {
    const classes = useStyles();
    const cases = useSelector((state) => state.caseReducer.cases);

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.container}>
                <Typography
                    component="div"
                    style={{ backgroundColor: '#3a3a3e', height: '100vh' }}
                    variant="h2">
                    Case Overview
                </Typography>
                <CaseList cases={cases} />
            </div>
        </React.Fragment>
    );
};
