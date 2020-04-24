import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

import NoteAddOutlinedIcon from "@material-ui/icons/NoteAddOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: "0px",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    color: "#2E64FE",
  },

  list_icon: {
    fontSize: "30px",
    color: "#a4a4a4",
  },

  list_icon_root: {
    fontSize: "35px",
    color: "#a4a4a4",
  },

  list_text: {
    fontSize: "10px",
    color: "#a4a4a4",
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <NoteAddOutlinedIcon className={classes.list_icon_root} />
        </ListItemIcon>
        <ListItemText
          primary="Cadastros gerais"
          className={classes.list_text}
        />
        {open ? (
          <ExpandLess style={{ color: "#a4a4a4" }} />
        ) : (
          <ExpandMore style={{ color: "#a4a4a4" }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Baixa" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Bem" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Estado" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Natureza" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Origem" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText className={classes.list_text} primary="Ocorrência" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Localidade" className={classes.list_text} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
