import React from 'react';

import {Button} from '@material-ui/core';

const Index = ({type, children}, ...props) => {
  return (
    <Button
      type={type}
      {...props}
      variant='contained'
      color='primary'
      disableElevation
      fullWidth
    >
      {children}
    </Button>
  );
};

export default Index;
