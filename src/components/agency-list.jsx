import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { CaseListItem } from './case-list-item';
import { Radio, Grid } from '@material-ui/core';
import CaseManager from '../managers/case-manager';
import { useSelector } from 'react-redux';
import { AgencyListItem } from './agency-list-item';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '15vh',
        right: '50vh',
        width: 450,
    },
});

export const AgencyList = () => {
    const classes = useStyles();
    const selectedCase = useSelector((state) => state.caseReducer.selectedCase);
    const [caseItem, setCaseItem] = useState();

    useEffect(() => {
        setCaseItem(CaseManager.getCase(selectedCase));
    }, [selectedCase]);

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom variant="h4">
                    Agency List
                </Typography>
                {caseItem ? (
                    <AgencyListItem caseItem={caseItem} />
                ) : (
                    <Typography variant="h5">
                        Please select a case to view it's associated agencies
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};
