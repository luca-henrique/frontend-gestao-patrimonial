import React from "react";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core/";

import { ExitToApp, HomeWorkOutlined } from "@material-ui/icons/";

import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

/**
 *
 * Components
 */

import ListItemCreate from "./components/list-item-create/";

import ListPdf from "./components/list-pdf/";

/**
 * Icons[IMG]
 */
import patrimonio from "../../../../assets/icons/patrimony.png";

export default function Menu(props) {
  const classes = useStyles();

  return (
    <div>
      <List style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <PersonOutlineOutlinedIcon className={classes.list_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_text} primary="Conta" />
        </ListItem>

        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <HomeWorkOutlined className={classes.list_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_text}>Prefeitura</ListItemText>
        </ListItem>

        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <img
              src={patrimonio}
              style={{ width: "35px", height: "35px" }}
              alt="patrimonio"
            />
          </ListItemIcon>
          <ListItemText className={classes.list_text} primary="Patrimônio" />
        </ListItem>

        <ListItemCreate />

        <ListItem button className={classes.list_item}>
          <ListItemIcon>
            <AssignmentOutlinedIcon className={classes.list_icon} />
          </ListItemIcon>
          <ListItemText className={classes.list_text}>Log</ListItemText>
        </ListItem>

        <ListPdf />

        <ListItem button style={{ color: "rgb(211, 66, 66)" }}>
          <ListItemIcon>
            <ExitToApp style={{ fontSize: "35", color: "rgb(211, 66, 66)" }} />
          </ListItemIcon>
          <ListItemText
            style={{ fontSize: "10px", color: "rgb(211, 66, 66)" }}
            primary="Sair"
          />
        </ListItem>
      </List>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  list_item: {
    color: "#2E64FE",
  },

  list_icon: {
    fontSize: "35px",
    color: "#a4a4a4",
  },

  list_text: {
    fontSize: "10px",
    color: "#a4a4a4",
  },
}));
