import React from 'react';

import {isMobile} from 'react-device-detect';

import clsx from 'clsx';

import LeftIcons from '~/components/atomic/organisms/DrawerMenu';
import AppBar from '~/components/atomic/molecules/AppBar';

import {makeStyles} from '@material-ui/core/styles';

/* -> Tamanho do menu lateral[esquerda] <- */
const drawerWidth = isMobile ? 250 : 310;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowY: 'scroll !important',
  },

  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawer: {
    width: drawerWidth,
  },
}));

export default function Dashboard({children}) {
  const classes = useStyles();

  const drawer = true;

  return (
    <div className={classes.root}>
      <AppBar />

      <LeftIcons />
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: drawer,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </div>
    </div>
  );
}
