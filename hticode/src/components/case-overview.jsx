import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CaseList } from './case-list';
import Case from '../classes/case';

export const CaseOverview = () => {
    let cases = [];

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            cases.push(new Case([], i, 'demographicsPlaceholder'));
        }
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Typography
                    component="div"
                    style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
                />
                <CaseList cases={cases} />
            </Container>
        </React.Fragment>
    );
};
