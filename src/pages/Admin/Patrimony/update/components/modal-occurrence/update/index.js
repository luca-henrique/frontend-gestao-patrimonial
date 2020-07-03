import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimonyOccurrence } from "~/store/ducks/occurrence-patrimony-item";
import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const visible = useSelector(
    (state) =>
      state.occurrente_patrimony_item.show_modal_update_occurrence_patrimony
        .visible
  );
  console.log(visible);

  const [dateOccurrence, setDateOccurrence] = useState("");
  const [typeOccurrence, setTypeOccurrenc] = useState("");
  const [report, setReport] = useState("");
  const [specification, setSpecification] = useState("");

  const handleClose = () => {
    dispatch(CreatorsPatrimonyOccurrence.hideModalUpdateOccurrencePatrimony());
  };

  const deletePatrimony = (e) => {
    e.preventDefault();

    handleClose();
    setDateOccurrence("");
    setTypeOccurrenc("");
    setReport("");
    setSpecification("");
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
            {"Atualizar Ocorrência"}
          </DialogTitle>
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
              value={dateOccurrence}
              onChange={(e) => setDateOccurrence(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              margin="dense"
              label="Tipo de baixa"
              type="text"
              fullWidth
              value={typeOccurrence}
              onChange={(e) => setTypeOccurrenc(e.target.value)}
            />

            <TextField
              variant="outlined"
              required
              margin="dense"
              label="Laudo"
              type="text"
              fullWidth
              rows={3}
              multiline
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              margin="dense"
              label="Especificação"
              type="text"
              fullWidth
              rows={3}
              multiline
              value={specification}
              onChange={(e) => setSpecification(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button color="primary" type="submit">
              Atualizar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
