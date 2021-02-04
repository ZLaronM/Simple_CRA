import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CaseListItem } from './case-list-item';
import { Radio, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectCaseAction } from '../store/action/case-action';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '15vh',
        left: '50vh',
        width: 450,
    },
    item: {
        padding: 10,
    },
    radioBtn: {
        fontSize: 30,
    },
});

export const CaseList = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(-1);
    const caseNums = useSelector((state) => state.caseReducer.caseNums);
    const dispatch = useDispatch();

    const handleToggle = (e) => {
        setChecked(+e.target.value);
        dispatch(selectCaseAction(+e.target.value));
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom variant="h4">
                    Case List
                </Typography>
                {caseNums.map((caseNum) => (
                    <Grid className={classes.item} container direction="row">
                        <Radio
                            checked={caseNum === checked}
                            className={classes.radioBtn}
                            value={caseNum}
                            onChange={handleToggle}
                        />
                        <CaseListItem caseNum={caseNum} />
                    </Grid>
                ))}
                {/* Would probably add a button here to add more cases using an action/Case Manager combo */}
            </CardContent>
        </Card>
    );
};
