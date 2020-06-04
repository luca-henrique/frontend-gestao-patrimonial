import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import SyncAltIcon from "@material-ui/icons/SyncAlt";
import LoopIcon from "@material-ui/icons/Loop";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles((theme) => ({
  speedDial: {
    position: "fixed",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiSpeedDial: {
      root: {
        backgroundColor: "#8888",
        color: "#8888",
      },
      MuiFab: {
        backgroundColor: "#8888",
        color: "#8888",
      },
    },
  },
});

const actions = [
  { icon: <FileCopyIcon />, name: "Nota Fiscal" }, // Armazenar pdf ou baixar pdf
  { icon: <SaveIcon />, name: "Fichado bem" }, // gerar pdf [ReactPDF]
  { icon: <PrintIcon />, name: "Ocorrência" }, // Modal com uma lista de ocorrências
  { icon: <SyncAltIcon />, name: "Transferência" }, // Modal com uma lista de transferências
  { icon: <FavoriteIcon />, name: "Baixa" },
  { icon: <LoopIcon />, name: "Duplicar" }, //Duplicar o item mudando o numero de tombamento
  { icon: <DeleteOutlineIcon />, name: "Deletar" },
];

export default function SpeedDials() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const clickActions = () => {
    console.log("Teste");
  };

  return (
    <ThemeProvider theme={theme}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction={"up"}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </ThemeProvider>
  );
}
