import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsLowItemPatrimony } from "~/store/ducks/low-patrimony-item";

import { Typography } from "@material-ui/core";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const open = useSelector(
    (state) => state.low_patrimony_item.remove_low_patrimony.visible
  );
  const lowId = useSelector(
    (state) => state.low_patrimony_item.remove_low_patrimony.id_low
  );
  const dispatch = useDispatch();

  const remove = () => {
    handleClose();
    dispatch(CreatorsLowItemPatrimony.deleteLowPatrimonyRequest(lowId));
    dispatch(CreatorsLowItemPatrimony.lowPatrimonyNotExist());
  };

  const handleClose = () => {
    dispatch(CreatorsLowItemPatrimony.hideModalRemoveLowPatrimony());
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        Remover Baixa
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Você deseja remover a baixa desse item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={remove} color="primary">
          Remover baixa
        </Button>
      </DialogActions>
    </Dialog>
  );
}
