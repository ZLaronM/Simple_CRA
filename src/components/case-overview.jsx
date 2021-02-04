import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { CaseList } from './case-list';
import { makeStyles } from '@material-ui/core';
import store from '../store/store';
import CaseManager from '../managers/case-manager';

const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
    },
});

export const CaseOverview = () => {
    const classes = useStyles();
    const caseNums = useSelector((state) => state.caseReducer.caseNums);

    useEffect(() => {
        // Starting cases
        CaseManager.addCase(
            7,
            [
                { name: 'John', agency: 'Hospital' },
                { name: 'Maria', agency: 'School' },
            ],
            'some demographics'
        );
        CaseManager.addCase(
            11,
            [
                { name: 'Jimmy', agency: 'Fire Department' },
                { name: 'Sarah', agency: 'CSI' },
                { name: 'Sean', agency: 'Police' },
            ],
            'some demographics'
        );
        CaseManager.addCase(
            35,
            [
                { name: 'Timmy', agency: 'FBI' },
                { name: 'Paul', agency: 'Google' },
            ],
            'some demographics'
        );
    }, []);

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
                <CaseList caseNums={caseNums} />
            </div>
        </React.Fragment>
    );
};
