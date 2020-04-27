import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import box from "../../../../../../../../assets/icons/box.png";
import baixa from "../../../../../../../../assets/icons/danger.png";
import bem from "../../../../../../../../assets/icons/bem2.png";
import estado from "../../../../../../../../assets/icons/estado.png";
import natureza from "../../../../../../../../assets/icons/natureza.png";
import origem from "../../../../../../../../assets/icons/origem.png";
import localizacao from "../../../../../../../../assets/icons/localizacao.png";

export default function ListCreateGeneral() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <img
            src={box}
            style={{
              width: "32px",
              height: "32px",
              color: "#a4a4a4",
              marginLeft: "3px",
            }}
            alt="Cadastrar tipos gerais"
          />
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
              <img
                src={baixa}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Baixa"
              />
            </ListItemIcon>
            <ListItemText primary="Baixa" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={bem}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Bem"
              />
            </ListItemIcon>
            <ListItemText primary="Bem" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={estado}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Estado do item"
              />
            </ListItemIcon>
            <ListItemText primary="Estado" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={natureza}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Natureza do item"
              />
            </ListItemIcon>
            <ListItemText primary="Natureza" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={origem}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Origem do item"
              />
            </ListItemIcon>
            <ListItemText primary="Origem" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={baixa}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Ocorrência do item"
              />
            </ListItemIcon>
            <ListItemText className={classes.list_text} primary="Ocorrência" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={localizacao}
                style={{
                  width: "30px",
                  height: "30px",
                }}
                alt="Localidade do item"
              />
            </ListItemIcon>
            <ListItemText primary="Localidade" className={classes.list_text} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

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
