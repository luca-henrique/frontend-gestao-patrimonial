import React from "react";

/* -> Style <- */
import { makeStyles } from "@material-ui/core/styles";

/* -> Components[Biblioteca] <- */
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core/";

/* -> Components[Criados] <- */
import PatrimonioPage from "./components/list-patrimonio/";

/* -> Icons[] <- */
import { ExpandLess, ExpandMore } from "@material-ui/icons/";

/* -> Icons[] <- */
import pdf from "../../../../../../../../assets/icons/pdf.png";
import inventario from "../../../../../../../../assets/icons/inventario.png";
import termo from "../../../../../../../../assets/icons/termo.png";
import transferencia from "../../../../../../../../assets/icons/transferencia.png";

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

export default function ListReport() {
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
            src={pdf}
            style={{ width: "34px", height: "34px", color: "#a4a4a4" }}
            alt="relatório"
          />
        </ListItemIcon>
        <ListItemText primary="Relatórios" className={classes.list_text} />
        {open ? (
          <ExpandLess style={{ color: "#a4a4a4" }} />
        ) : (
          <ExpandMore style={{ color: "#a4a4a4" }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <PatrimonioPage />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={inventario}
                style={{ width: "35px", height: "35px" }}
                alt="inventario"
              />
            </ListItemIcon>
            <ListItemText primary="Inventario" className={classes.list_text} />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={termo}
                style={{ width: "35px", height: "35px" }}
                alt="termo"
              />
            </ListItemIcon>
            <ListItemText
              primary="Termo de responsabilidade"
              className={classes.list_text}
            />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <img
                src={transferencia}
                style={{ width: "25px", height: "25px", marginLeft: "5px" }}
                alt="transferência"
              />
            </ListItemIcon>
            <ListItemText
              primary="Transferência"
              className={classes.list_text}
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
