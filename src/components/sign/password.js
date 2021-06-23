import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

const Password = (props) => {

    const [password, setPassword] = useState(props.password);
    const [valid, setValid] = useState(false);
    const [error, setError] = useState('');



    const validatePassword = (pass) => {
  
        if (pass.length>=6) {
          setValid(false);
          setError('');
          setPassword(pass);
        }
         else {
          setValid(true);
          setError("password must be at least six chars")
        }
      }
      
      const onChangeHandle=(e)=>{
          const tmp = e.target.value;
          validatePassword(tmp);
      }
    
    return(
            <TextField
            error={valid}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangeHandle}
            helperText={error}
            />
    )
}

export default Password