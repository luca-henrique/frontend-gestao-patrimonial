import React from 'react';

import {isMobile} from 'react-device-detect';

import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';

import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core/';

import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = isMobile ? 250 : 310;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
  },
}));

export default function Top() {
  const classes = useStyles();

  const drawer = true;

  return (
    <AppBar
      position='fixed'
      style={{backgroundColor: '#2E64FE'}}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawer,
      })}
    >
      <Toolbar style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{display: 'flex'}}>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              className={clsx(classes.menuButton, drawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div style={{display: 'flex', height: '32px', marginTop: '7px'}}>
            <Typography variant='h6' noWrap style={{color: '#fff'}}>
              Gestão Patrimônial
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
