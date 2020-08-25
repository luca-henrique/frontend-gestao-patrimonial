import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsDrawerMenu } from "~/store/ducks/drawer-menu";
import { Creators as CreatorsChangerPage } from "~/store/ducks/page";

import { isMobile } from "react-device-detect";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

/* -> Components[Biblioteca] <- */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import AccountCircle from "@material-ui/icons/AccountCircle";

/* -> Icones <- */
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = isMobile ? 250 : 310;

const useStyles = makeStyles((theme) => ({
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
}));

export default function Top() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const drawer = useSelector((state) => state.drawer.drawer.visible);

  const handleDrawerOpen = () => {
    dispatch(CreatorsDrawerMenu.showDrawerMenu());
  };

  function changePage(location) {
    dispatch(CreatorsChangerPage.changePageLocation(location));

    if (isMobile) {
      dispatch(CreatorsDrawerMenu.hideDrawerMenu());
    }
  }

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#2E64FE" }}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawer,
      })}
    >
      <Toolbar
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, drawer && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div style={{ display: "flex", height: "32px", marginTop: "7px" }}>
            <Typography variant="h6" noWrap style={{ color: "#fff" }}>
              Sistema de patrimônio
            </Typography>
          </div>
        </div>

        <div>
          <Tooltip title="Minha conta">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={() => changePage("perfil")}
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}
