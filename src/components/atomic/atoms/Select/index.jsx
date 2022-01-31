import React from 'react';

import {FormControl, Select} from '@material-ui/core';

const Index = ({value, setValue, options}) => {
  return (
    <FormControl
      required
      variant='outlined'
      style={{width: '100%'}}
      size='small'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <Select native size='small' fullWidth>
        <option value='' />
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default Index;
