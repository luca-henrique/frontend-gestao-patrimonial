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

  const [dateLow, setDateLow] = useState("");
  const [typeLow, setTypeLow] = useState("");
  const [reason, setReason] = useState("");

  const handleClose = () => {};

  const deletePatrimony = (e) => {
    e.preventDefault();

    handleClose();
    setDateLow("");
    setTypeLow("");
    setReason("");
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={deletePatrimony}>
          <DialogTitle id="alert-dialog-title">
            {"Informe o email e a senha do admnistrador"}
          </DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              label="date"
              type="email"
              fullWidth
              value={dateLow}
              onChange={(e) => setDateLow(e.target.value)}
            />
            <TextField
              required
              margin="dense"
              label="Tipo de baixa"
              type="text"
              fullWidth
              value={typeLow}
              onChange={(e) => setTypeLow(e.target.value)}
            />

            <TextField
              required
              margin="dense"
              label="Motivo"
              type="text"
              fullWidth
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button color="primary" type="submit">
              Continuar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
