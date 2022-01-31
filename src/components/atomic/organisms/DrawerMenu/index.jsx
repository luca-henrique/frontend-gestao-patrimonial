import React, {useState} from 'react';

import {Drawer, IconButton} from '@material-ui/core/';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import {isMobile} from 'react-device-detect';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Menu from '../../molecules/DrawerMenuList';
const drawerWidth = isMobile ? 250 : 310;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    overflowY: 'scroll !important',
  },

  drawerPaper: {
    width: drawerWidth,
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

  drawer: {
    width: drawerWidth,
  },
}));

const DrawerMenuLeft = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(true);

  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton style={{color: '#a4a4a4'}}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>

      <Menu />
    </Drawer>
  );
};

export default DrawerMenuLeft;
