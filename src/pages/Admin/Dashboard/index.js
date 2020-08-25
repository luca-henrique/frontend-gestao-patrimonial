import React, { lazy } from "react";

import { isMobile } from "react-device-detect";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsDrawerMenu } from "~/store/ducks/drawer-menu";

import clsx from "clsx";

/* -> Components[Criados] <- */
import LeftIcons from "../Menu/index";
import Topbar from "./AppBar";

/* -> Components[Biblioteca] <- */
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";

/* -> Icones <- */

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

/* -> Rotas[esquerda] <- */
const Routes = lazy(() => import("../Menu/menu-routes"));

/* -> Tamanho do menu lateral[esquerda] <- */
const drawerWidth = isMobile ? 250 : 310;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflowY: "scroll !important",
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawer: {
    width: drawerWidth,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  const drawer = useSelector((state) => state.drawer.drawer.visible);

  const handleDrawerClose = () => {
    dispatch(CreatorsDrawerMenu.hideDrawerMenu());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Topbar />

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{ color: "#a4a4a4" }}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <LeftIcons />
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: drawer,
        })}
      >
        <div className={classes.drawerHeader} />
        <Routes />
      </div>
    </div>
  );
}
