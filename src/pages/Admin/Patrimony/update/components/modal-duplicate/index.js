import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsDuplicatePatrimony } from "~/store/ducks/duplicate-patrimony-item";
import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const [newTipping, setNewTipping] = useState("");

  const visible = useSelector(
    (state) => state.duplicate_patrimony_item.show_patrimony_duplicate.visible
  );

  const id_patrimony = useSelector(
    (state) =>
      state.duplicate_patrimony_item.show_patrimony_duplicate.id_patrimony
  );

  const handleClose = () => {
    dispatch(CreatorsDuplicatePatrimony.hideModalDuplicatePatrimony());
  };

  const deletePatrimony = (e) => {
    e.preventDefault();

    dispatch(
      CreatorsDuplicatePatrimony.duplicatePatrimonyRequest(
        id_patrimony,
        newTipping
      )
    );

    handleClose();
    setNewTipping("");
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
            {"Informe o numero do tombamento"}
          </DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              label="numero do tombamento"
              type="text"
              fullWidth
              value={newTipping}
              onChange={(e) => setNewTipping(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button color="primary" type="submit">
              Duplicar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
