import React from "react";

/* -> Components[Biblioteca] <- */
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core/";

/* -> Components[Criados] <- */
import ListItemCreate from "./components/list-item-create/";
import ListRelatorios from "./components/list-pdf/";

/* -> Icons <- */
import {
  ExitToApp,
  HomeWorkOutlined,
  PersonOutlineOutlined,
  AssignmentOutlined,
} from "@material-ui/icons/";

/* -> Icons <- */
import patrimonio from "../../../../../../assets/icons/patrimony.png";

export default function Menu() {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.list}>
        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <PersonOutlineOutlined className={classes.list_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_text} primary="Conta" />
        </ListItem>

        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <HomeWorkOutlined className={classes.list_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_text} primary="Prefeitura" />
        </ListItem>

        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <img
              src={patrimonio}
              className={classes.list_icon}
              alt="patrimonio"
            />
          </ListItemIcon>
          <ListItemText className={classes.list_text} primary="Patrimônio" />
        </ListItem>

        <ListItemCreate />

        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <AssignmentOutlined className={classes.list_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_text} primary="Log" />
        </ListItem>

        <ListRelatorios />

        <ListItem button className={classes.list_exit_item}>
          <ListItemIcon>
            <ExitToApp className={classes.list_exit_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_exit_text} primary="Sair" />
        </ListItem>
      </List>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },

  list_item: {
    color: "#2E64FE",
  },

  list_icon: {
    width: "34px",
    height: "34px",
    color: "#a4a4a4",
  },

  list_text: {
    fontSize: "10px",
    color: "#a4a4a4",
  },

  list_exit_item: {
    color: "rgb(211, 66, 66)",
  },

  list_exit_icon: {
    width: "34px",
    height: "34px",
    color: "rgb(211, 66, 66)",
  },

  list_exit_text: {
    fontSize: "10px",
    color: "rgb(211, 66, 66)",
  },
}));
