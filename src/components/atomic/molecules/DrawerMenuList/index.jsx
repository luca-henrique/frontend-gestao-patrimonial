import React from 'react';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core/';

/* -> Components[Criados] <- */
import ListItemCreate from './list-item-create';
import ListRelatorios from './list-pdf';

/* -> Icons <- */
import {
  ExitToApp,
  HomeWorkOutlined,
  PersonOutlineOutlined,
  AssignmentOutlined,
} from '@material-ui/icons/';

const listMenu = [
  {name: 'Usuário', Icon: PersonOutlineOutlined},
  {name: 'Prefeitura', Icon: HomeWorkOutlined},
  {name: 'Patrimônio', Icon: HomeWorkOutlined},
  {name: 'Log', Icon: AssignmentOutlined},
  {name: 'Sair', Icon: ExitToApp},
];

export default function Menu() {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItemCreate />
      <ListRelatorios />
      {listMenu.map((item) => {
        return (
          <ListItem button className={classes.list_item}>
            <ListItemIcon>
              <item.Icon className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText className={classes.list_text} primary={item.name} />
          </ListItem>
        );
      })}
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: '0px',
    paddingBottom: '0px',
  },

  list_item: {
    color: '#2E64FE',
  },

  list_icon: {
    width: '34px',
    height: '34px',
    color: '#a4a4a4',
  },

  list_text: {
    fontSize: '10px',
    color: '#a4a4a4',
  },

  list_exit_item: {
    color: 'rgb(211, 66, 66)',
  },

  list_exit_icon: {
    width: '34px',
    height: '34px',
    color: 'rgb(211, 66, 66)',
  },

  list_exit_text: {
    fontSize: '10px',
    color: 'rgb(211, 66, 66)',
  },
}));
