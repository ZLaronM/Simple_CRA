import React from 'react';
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
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '15vh',
        left: '15vh',
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
});

export const CaseList = ({ caseNums }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

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

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom variant="h4">
                    Case List
                </Typography>
                <List>
                    {caseNums.map((caseNum) => (
                        <CaseListItem caseNum={caseNum} />
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};
