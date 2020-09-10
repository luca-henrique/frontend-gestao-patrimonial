import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimony } from "~/store/ducks/patrimony";
import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const [newTipping, setNewTipping] = useState("");
  const [number, setNumber] = useState("");

  const visible = useSelector(
    (state) => state.patrimony_item.patrimony_duplicate.visible
  );

  const id_patrimony = useSelector(
    (state) => state.patrimony_item.patrimony_duplicate.id
  );

  console.log("deu bom");

  const handleClose = () => {
    dispatch(CreatorsPatrimony.hideModalDuplicatePatrimony());
    setNewTipping("");
    setNumber("");
  };

  const deletePatrimony = (e) => {
    e.preventDefault();

    dispatch(
      CreatorsPatrimony.duplicatePatrimonyRequest(
        id_patrimony,
        newTipping,
        number
      )
    );

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
            {"Duplicar patrimônio"}
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
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              label="Quantos deseja criar ?"
              type="text"
              fullWidth
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
