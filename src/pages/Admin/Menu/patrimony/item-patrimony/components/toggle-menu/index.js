import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab/";

import SyncAltIcon from "@material-ui/icons/SyncAlt";
import LoopIcon from "@material-ui/icons/Loop";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import Icon from "~/assets/icons/danger.png";

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

    "& .MuiFab-primary": {
      backgroundColor: "#2E64FE",
    },
  },
}));

const actions = [
  {
    icon: <img src={Icon} alt="Ocorrência" style={{ color: "#a4a4a4" }} />,
    name: "Ocorrência",
  }, // Modal com uma lista de ocorrências
  { icon: <SyncAltIcon style={{ color: "#a4a4a4" }} />, name: "Transferência" }, // Modal com uma lista de transferências
  { icon: <img src={Icon} alt="Baixa" />, name: "Baixa" },
  { icon: <LoopIcon style={{ color: "#a4a4a4" }} />, name: "Duplicar" }, //Duplicar o item mudando o numero de tombamento
  {
    icon: <DeleteOutlineIcon style={{ color: "#FF0040" }} />,
    name: "Deletar",
  },
];

/**
 * pedir senha para excluir patrimonio
 */

export default function SpeedDials() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = (name) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // eslint-disable-next-line no-unused-vars
  const clickActions = (name) => {
    switch (expr) {
      case 'Deletar':
        console.log('Oranges are $0.59 a pound.');
        break;
      case 'Mangoes':
      case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
      default:
        console.log(`Sorry, we are out of ${expr}.`);
  };

  

  return (
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
          onClick={() => {handleClose(action.name);clickActions(action.name)}
        }
        />
      ))}
    </SpeedDial>
  );
}
