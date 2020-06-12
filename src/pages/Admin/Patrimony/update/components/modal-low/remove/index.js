import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimonyLow } from "~/store/ducks/low-patrimony-item";
import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const visible = useSelector(
    (state) => state.low_patrimony_item.show_remove_modal_low_patrimony.visible
  );
  console.log(visible);

  const handleClose = () => {
    dispatch(CreatorsPatrimonyLow.hideModalRemoveLowPatrimony());
  };

  const deletePatrimony = (e) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <div>
      <Dialog
        open={visible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={deletePatrimony}>
          <DialogTitle id="alert-dialog-title">
            {"Deseja remover a baixa do patrimônio?"}
          </DialogTitle>
          <DialogContent>
            {"Clique em sim caso deseje continuar."}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Não
            </Button>
            <Button color="primary" type="submit">
              Sim
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
