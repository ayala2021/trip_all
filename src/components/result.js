import { Button, ButtonGroup, Card, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
import './result.css';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        direction: 'rtl'
    },
    item: {
        height: 100
    },
    btn:{
        width: '30%'
    }
}))
const Result = () => {
    const history = useHistory();
    const classes = useStyles();
    return <Card className={classes.root}>
        <List>
            <ListItem className={classes.item} >פרטי טיסה</ListItem>
            <ListItem className={classes.item}>פרטי מלון</ListItem>
            <Button size="large" className={classes.btn} onClick={()=>{history.push(`/order`)}}>בחירת הטיול</Button>
            <ListItem>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button>ראה אטקציות באיזור</Button>
                <Button>נוסעים ממליצים</Button>
            </ButtonGroup>
            </ListItem>
        </List>
    </Card>
}

export default Result