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
    (state) => state.low_patrimony_item.show_create_modal_low_patrimony.visible
  );
  console.log(visible);

  const [dateLow, setDateLow] = useState("");
  const [typeLow, setTypeLow] = useState("");
  const [reason, setReason] = useState("");

  const handleClose = () => {
    dispatch(CreatorsPatrimonyLow.hideModalCreateLowPatrimony());
  };

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
        open={visible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={deletePatrimony}>
          <DialogTitle id="alert-dialog-title">{"Baixa"}</DialogTitle>
          <DialogContent>
            <TextField
              required
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
              label="Data"
              type="date"
              fullWidth
              value={dateLow}
              onChange={(e) => setDateLow(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              margin="dense"
              label="Tipo de baixa"
              type="text"
              fullWidth
              value={typeLow}
              onChange={(e) => setTypeLow(e.target.value)}
            />

            <TextField
              variant="outlined"
              required
              margin="dense"
              label="Motivo"
              type="text"
              fullWidth
              rows={4}
              multiline
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button color="primary" type="submit">
              Dar baixa
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
