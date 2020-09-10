import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";
import { Creators as CreatorsTransfer } from "~/store/ducks/transference-patrimony-item";
import { Creators as CreatorsLowPatrimony } from "~/store/ducks/low-patrimony-item";
import { Creators as CreatorsOccurrencePatrimony } from "~/store/ducks/occurrence-patrimony-item";

import { ToastContainer, toast } from "react-toastify";

import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@material-ui/lab/";

import SyncAltIcon from "@material-ui/icons/SyncAlt";
import LoopIcon from "@material-ui/icons/Loop";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Icon from "~/assets/icons/danger.png";
import Icon2 from "~/assets/icons/danger-exist.png";

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

export default function SpeedDials() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const existOccurrence = useSelector(
    (state) => state.occurrente_patrimony_item.exist_occurrence_patrimony
  );

  const handleClose = (name) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const patrimony = useSelector((state) => state.patrimony_item.show_patrimony);

  const exist_low = useSelector(
    (state) => state.low_patrimony_item.low_item_patrimony_exist
  );

  console.log("Lembre que falta configurar os ids de cada item");

  const userLog = (user) => {
    if (user === "admin") {
      dispatch(CreatorsPatrimony.deletePatrimonyRequest(patrimony.id));
    } else {
      toast.error(
        "Você não pode excluir esté patrimônio, entre em contato com um administrador.",
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        }
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

  const role = useSelector((state) => state.account.account_joined.role);
  const exist_low_patrimony = useSelector(
    (state) => state.low_patrimony_item.low_item_patrimony_exist
  );

  const notify = () => {
    toast.error("Já foi realizada uma baixa nesse item.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    toast.error("Você não é administrador.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const low = () => {
    // if (patrimony.situation === "baixa")

    if (role && exist_low_patrimony) {
      dispatch(CreatorsLowPatrimony.showModalRemoveLowPatrimony(patrimony.id));
    } else if (role && exist_low_patrimony === false) {
      dispatch(CreatorsLowPatrimony.showModalCreateLowPatrimony(patrimony.id));
    } else if (role === false && exist_low_patrimony === false) {
      dispatch(CreatorsLowPatrimony.showModalCreateLowPatrimony(patrimony.id));
    } else {
      notify();
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
        dispatch(CreatorsPatrimony.showModalDuplicatePatrimony(patrimony.id));
        break;
      case "Deletar":
        userLog("user");
        break;
      default:
        console.log(`Sorry, we are out of ${name}.`);
    }
  };

  const actions = [
    {
      icon: <img src={Icon} alt="Ocorrência " />,
      name: "Ocorrência",
    }, // Modal com uma lista de ocorrências
    {
      icon: <SyncAltIcon style={{ color: "#a4a4a4" }} />,
      name: "Transferência",
    }, // Modal com uma lista de transferências
    {
      icon: <img src={exist_low ? Icon2 : Icon} alt="Baixa" />,
      name: "Baixa",
    },
    { icon: <LoopIcon style={{ color: "#a4a4a4" }} />, name: "Duplicar" }, //Duplicar o item mudando o numero de tombamento
    {
      icon: <DeleteOutlineIcon style={{ color: "#FF0040" }} />,
      name: "Deletar",
    },
  ];

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
      <ToastContainer />
    </SpeedDial>
  );
}
