import React, { useEffect } from "react";

import { isMobile } from "react-device-detect";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsDrawerMenu } from "~/store/ducks/drawer-menu";

import clsx from "clsx";

/* -> Components[Criados] <- */
import LeftIcons from "../Menu/index";

/* -> Components[Biblioteca] <- */
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

/* -> Icones <- */
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

/* -> Rotas[esquerda] <- */
import { Routes } from "../Menu/menu-routes";

/* -> Tamanho do menu lateral[esquerda] <- */
const drawerWidth = isMobile === true ? 250 : 310;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflowY: "scroll !important",
  },

  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
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
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  const pageLocation = useSelector(({ page }) => page.location);

  const drawer = useSelector((state) => state.drawer.drawer.visible);

  const handleDrawerOpen = () => {
    dispatch(CreatorsDrawerMenu.showDrawerMenu());
  };

  const handleDrawerClose = () => {
    dispatch(CreatorsDrawerMenu.hideDrawerMenu());
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#2E64FE" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Sistema de patrimônio
          </Typography>
        </Toolbar>
      </AppBar>
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
        {Routes[pageLocation]}
      </div>
    </div>
  );
}
