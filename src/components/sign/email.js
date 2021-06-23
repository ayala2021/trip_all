import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import TextValidator, { ValidatorForm } from 'react-material-ui-form-validator';
import validator from 'validator'

const Email = (props) => {
  const [email, setEmail] = useState(props.email);
  const [valid, setValid] = useState(false);


  const validateEmail = (email) => {
  
    if (validator.isEmail(email)) {
      setValid(false);
    }
     else {
      setValid(true);
      setEmail(email);
    }
  }
  
  const onChangeHandle=(e)=>{
      const tmp = e.target.value;
      setEmail(tmp);
      validateEmail(tmp);
  }


    return <TextField
            error={valid}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandle}
          />
}

export default Email