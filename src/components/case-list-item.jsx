import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import CaseManager from '../managers/case-manager';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    listItem: {
        minWidth: '7px',
    },
    listItemText: {
        paddingRight: '10px',
    },
});

export const CaseListItem = ({ caseNum }) => {
    const classes = useStyles();
    const [checked, setChecked] = useState([0]);
    const [demographics, setDemographics] = useState('');
    const labelId = `checkbox-list-label-${caseNum}`;

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    useEffect(() => {
        setDemographics(CaseManager.getDemo(caseNum));
    }, [caseNum]);

    return (
        <ListItem
            key={caseNum}
            role={undefined}
            dense
            button
            onClick={handleToggle(caseNum)}>
            <ListItemIcon className={classes.listItem}>
                <Checkbox
                    edge="start"
                    checked={checked.indexOf(caseNum) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                        'aria-labelledby': labelId,
                    }}
                />
            </ListItemIcon>
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
        </ListItem>
    );
};
