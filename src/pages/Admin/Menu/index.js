import React from "react";

/* -> Redux[Biblioteca] <- */
import { useDispatch } from "react-redux";
import { Creators as CreatorsPage } from "~/store/ducks/page";
import { Creators as CreatorsDrawerMenu } from "~/store/ducks/drawer-menu";
import AuthAction from "~/store/ducks/auth";

/* -> fica verificando se é desktop ou mobile <- */
import { isMobile } from "react-device-detect";

/* -> Components[Biblioteca] <- */
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core/";

/* -> Components[Criados] <- */
import ListItemCreate from "./list-item-create/";
import ListRelatorios from "./list-pdf/";

/* -> Icons <- */
import {
  ExitToApp,
  HomeWorkOutlined,
  PersonOutlineOutlined,
  AssignmentOutlined,
} from "@material-ui/icons/";

/* -> Icons <- */
import patrimonio from "~/assets/icons/patrimony.png";

export default function Menu() {
  const classes = useStyles();

  const dispatch = useDispatch();

  function changePage(location) {
    dispatch(CreatorsPage.changePageLocation(location));

    if (isMobile) {
      dispatch(CreatorsDrawerMenu.hideDrawerMenu());
    }
  }

  return (
    <List className={classes.list}>
      <ListItem
        button
        className={classes.list_item}
        onClick={() => {
          changePage("account");
        }}
      >
        <ListItemIcon>
          <PersonOutlineOutlined className={classes.list_icon} />
        </ListItemIcon>
        <ListItemText className={classes.list_text} primary="Conta" />
      </ListItem>

      <ListItem button className={classes.list_item}>
        <ListItemIcon>
          <HomeWorkOutlined className={classes.list_icon} />
        </ListItemIcon>
        <ListItemText
          className={classes.list_text}
          primary="Prefeitura"
          onClick={(e) => {
            console.log(e);
            changePage("prefecture");
          }}
        />
      </ListItem>

      <ListItem
        button
        className={classes.list_item}
        onClick={() => changePage("patrimony_list")}
      >
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
        <ListItemText
          className={classes.list_text}
          primary="Log"
          onClick={() => changePage("log")}
        />
      </ListItem>

      <ListRelatorios />

      <ListItem
        button
        className={classes.list_exit_item}
        onClick={() => dispatch(AuthAction.signOut())}
      >
        <ListItemIcon>
          <ExitToApp className={classes.list_exit_icon} />
        </ListItemIcon>
        <ListItemText className={classes.list_exit_text} primary="Sair" />
      </ListItem>
    </List>
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
