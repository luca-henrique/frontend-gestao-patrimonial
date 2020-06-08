import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsDeletePatrimony } from "~/store/ducks/delete-patrimony-item";

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

  //id do patrimonio que foi selecionado na tabela
  const patrimony_id = useSelector(
    (state) => state.patrimony_item.show_patrimony.id
  );

  const dispatch = useDispatch();

  const userLog = (user) => {
    if (user === "admin") {
      dispatch(
        CreatorsDeletePatrimony.showModalDeletePatrimonyAdmin(patrimony_id)
      );
    } else {
      dispatch(
        CreatorsDeletePatrimony.showModalDeletePatrimonyUser(patrimony_id)
      );
    }
  };

  const clickActions = (name) => {
    switch (name) {
      case "Ocorrência":
        console.log("Ocorrência.");
        break;
      case "Transferência":
        console.log("Transferência.");
        break;
      case "Baixa":
        console.log("Baixa.");
        break;
      case "Duplicar":
        console.log("Duplicar.");
        break;
      case "Deletar":
        userLog("user");
        break;
      default:
        console.log(`Sorry, we are out of ${name}.`);
    }
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
          onClick={() => {
            handleClose(action.name);
            clickActions(action.name);
          }}
        />
      ))}
    </SpeedDial>
  );
}
