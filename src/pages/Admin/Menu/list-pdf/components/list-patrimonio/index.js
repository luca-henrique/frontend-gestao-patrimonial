import React, { useState } from "react";

/* -> Style[] <- */
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";
import { Creators as CreatorsPage } from "~/store/ducks/page";
import { Creators as CreatorsDrawerMenu } from "~/store/ducks/drawer-menu";

/* -> fica verificando se é desktop ou mobile <- */
import { isMobile } from "react-device-detect";

/* -> Components[Biblioteca] <- */
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core/";

/* -> Icons[] <- */
import {
  ExpandLess,
  ExpandMore,
  AssignmentOutlined,
  DescriptionOutlined,
} from "@material-ui/icons/";

/* -> Icons[PNG] <- */
import patrimonio from "~/assets/icons/patrimony.png";
import depreciacao from "~/assets/icons/depreciacao.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper,
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

export default function PatrimonyList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  function changePage(location) {
    dispatch(CreatorsPage.changePageLocation(location));
    if (isMobile) {
      dispatch(CreatorsDrawerMenu.hideDrawerMenu());
    }
  }

  return (
    <List component="nav" className={classes.root}>
      <ListItem button onClick={handleClick} style={{ padding: "0px" }}>
        <ListItemIcon>
          <img
            src={patrimonio}
            style={{ width: "32px", height: "35px" }}
            alt="relatório"
          />
        </ListItemIcon>
        <ListItemText primary="Patrimônio" className={classes.list_text} />
        {open ? (
          <ExpandLess style={{ color: "#a4a4a4" }} />
        ) : (
          <ExpandMore style={{ color: "#a4a4a4" }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            onClick={() => changePage("general")}
          >
            <ListItemIcon>
              <AssignmentOutlined className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText primary="Geral" className={classes.list_text} />
          </ListItem>

          <ListItem
            button
            className={classes.nested}
            onClick={() => changePage("tipping")}
          >
            <ListItemIcon>
              <DescriptionOutlined className={classes.list_icon} />
            </ListItemIcon>
            <ListItemText
              primary="Por tombamento"
              className={classes.list_text}
            />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            onClick={() => changePage("depreciation")}
          >
            <ListItemIcon>
              <img
                src={depreciacao}
                style={{ width: "20px", height: "25px", marginLeft: "5px" }}
                alt="Depreciação"
              />
            </ListItemIcon>
            <ListItemText primary="Depreciação" className={classes.list_text} />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
