import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Radio from '@material-ui/core/Checkbox';
import CaseManager from '../managers/case-manager';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    listItem: {
        textAlign: 'justify',
    },
});

export const CaseListItem = ({ caseNum }) => {
    const classes = useStyles();
    const [demographics, setDemographics] = useState('');
    const labelId = `list-label-${caseNum}`;

    useEffect(() => {
        setDemographics(CaseManager.getDemo(caseNum));
    }, [caseNum]);

    return (
        <div key={caseNum} className={classes.listItem}>
            <Grid container direction="column">
                <Grid item>
                    <ListItemText
                        className={classes.listItemText}
                        id={`${labelId}-1`}
                        primary={`Case Number: ${caseNum}`}
                    />
                </Grid>
                <Grid item>
                    <ListItemText
                        id={`${labelId}-2`}
                        primary={`Case Demographics: ${demographics}`}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
