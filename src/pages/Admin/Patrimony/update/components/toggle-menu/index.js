import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsDeletePatrimony } from "~/store/ducks/delete-patrimony-item";
import { Creators as CreatorsDuplicatePatrimony } from "~/store/ducks/duplicate-patrimony-item";
import { Creators as CreatorsTransfer } from "~/store/ducks/transference-patrimony-item";
import { Creators as CreatorsLowPatrimony } from "~/store/ducks/low-patrimony-item";
import { Creators as CreatorsOccurrencePatrimony } from "~/store/ducks/occurrence-patrimony-item";

import { toast } from "react-toastify";

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
  {
    icon: <img src={Icon} alt="Baixa" />,
    name: "Baixa",
  },
  { icon: <LoopIcon style={{ color: "#a4a4a4" }} />, name: "Duplicar" }, //Duplicar o item mudando o numero de tombamento
  {
    icon: <DeleteOutlineIcon style={{ color: "#FF0040" }} />,
    name: "Deletar",
  },
];

export default function SpeedDials() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = (name) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  const existOccurrence = useSelector(
    (state) => state.occurrente_patrimony_item.read_occurrence_patrimony.exist
  );

  console.log(patrimony);

  console.log("Lembre que falta configurar os ids de cada item");

  const userLog = (user) => {
    if (user === "admin") {
      dispatch(
        CreatorsDeletePatrimony.showModalDeletePatrimonyAdmin(patrimony.id)
      );
    } else {
      dispatch(
        CreatorsDeletePatrimony.showModalDeletePatrimonyUser(patrimony.id)
      );
    }
  };

  const occurrence = () => {
    if (!existOccurrence) {
      dispatch(
        CreatorsOccurrencePatrimony.showModalCreateOccurrencePatrimony(
          patrimony.id
        )
      );
    } else {
      dispatch(
        CreatorsOccurrencePatrimony.showModalUpdateOccurrencePatrimony(
          patrimony.id
        )
      );
    }
  };

  const low = () => {
    if (patrimony.situation === "baixa") {
      toast.error("Já foi realizada uma baixa nesse item.", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      dispatch(CreatorsLowPatrimony.showModalRemoveLowPatrimony(patrimony.id));
    } else {
      dispatch(CreatorsLowPatrimony.showModalCreateLowPatrimony(patrimony.id));
    }
  };

  const clickActions = (name) => {
    switch (name) {
      case "Ocorrência":
        occurrence();
        break;
      case "Transferência":
        dispatch(
          CreatorsTransfer.showModalListTransferencePatrimony(patrimony.id)
        );
        break;
      case "Baixa":
        low();
        break;
      case "Duplicar":
        dispatch(
          CreatorsDuplicatePatrimony.showModalDuplicatePatrimony(patrimony.id)
        );
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
