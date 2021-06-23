import { makeStyles, TextField } from '@material-ui/core'
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const Signup = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexWrap: 'wrap',
        },
          margin: {
            margin: theme.spacing(1),
          },
          withoutLabel: {
            marginTop: theme.spacing(3),
          },
          textField: {
            width: '25ch',
          },
    },
}));
  


        // const handleChange = (event) => {
        //     setValue(event.target.value);
        // };

            // const handleChange = (prop) => (event) => {
            //   setValues({ ...values, [prop]: event.target.value });
            // };
          
            // const handleClickShowPassword = () => {
            //   setValues({ ...values, showPassword: !values.showPassword });
            // };
          
            const handleMouseDownPassword = (event) => {
              event.preventDefault();
            };
        
    return <div >
        <TextField
            id="outlined-textarea"
            label="Name"
            placeholder="enter your name"
            multiline
            variant="outlined"
        />
        <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="enter your password"
            multiline
            variant="outlined"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            //type={values.showPassword ? 'text' : 'password'}
            //value={values.password}
            //onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  //onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {//values.showPassword ? <Visibility /> : <VisibilityOff />
                  }
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
    </div>
}

export default Signup