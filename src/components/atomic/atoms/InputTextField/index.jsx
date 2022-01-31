import React from 'react';
import {TextField} from '@material-ui/core';

const TextInput = ({label, type, children, value, setValue}, ...props) => {
  return (
    <TextField
      autoFocus
      label={label}
      type={type}
      fullWidth
      InputLabelProps={{shrink: true}}
      variant='outlined'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    >
      {children}
    </TextField>
  );
};

export default TextInput;
