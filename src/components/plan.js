import { Button, Card, makeStyles, Paper, TextField } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(5),
        width: theme.spacing('70%'),
        height: theme.spacing(100),
        textAlign: 'right',
        padding: theme.spacing(15)
    },
    gool: {
        textAlign: 'center'
    }
  }));
  

const Plan = () =>{
    const classes = useStyles();
    const history = useHistory();
    const filters=()=>{
        return <div>
        <input className={classes.gool}/> <label>יעד מבוקש</label>
        <br/>
        <TextField
    id="date"
    //label="תאריך התחלה"
    type="date"
    defaultValue= "2021-04-27"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <label>תאריך התחלה</label>
  <br/>
  <input type="number" min="1" />
  <label>מספר ימי שהות</label>
  <br/>
  <input type="number" min="1" />
  <label>מספר אנשים</label>
  <br/>  <br/>
  <label>סינונים נוספים...</label>
  <br/>
  <Button variant="outlined" color="primary" type="submit" onClick={()=>{history.push(`/result`)}}>חיפוש</Button>
        </div>
    }
    return <div> <Paper className={classes.root} elevation={3}>
    <form>{filters()}</form>
    </Paper>
    </div>
}
export default Plan