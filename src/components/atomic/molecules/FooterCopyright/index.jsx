import React from 'react';
import {Typography, Link} from '@material-ui/core/';

const Copyright = () => (
  <div
    style={{
      position: 'fixed',
      bottom: '0',
      zIndex: '99px',
      right: '0px',
      width: '100%',
    }}
  >
    <Typography
      variant='body2'
      color='textSecondary'
      align='center'
      style={{color: '#848484'}}
    >
      {'Copyright © '}
      <Link
        style={{color: '#848484'}}
        href='https://luca-henrique.github.io/curriculum/'
      >
        Lucas Henrique{' '}
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </div>
);

export default Copyright;
