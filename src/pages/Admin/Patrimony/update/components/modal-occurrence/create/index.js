import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputLabel, Select, FormControl } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimonyOccurrence } from "~/store/ducks/occurrence-patrimony-item";
import { Creators as CreatorsOccurrenceItem } from "~/store/ducks/occurrence-item";

import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const visible = useSelector(
    (state) =>
      state.occurrente_patrimony_item.create_occurrence_patrimony.visible
  );

  const patrimony_id = useSelector(
    (state) => state.patrimony_item.show_patrimony.id
  );

  const [dateOccurrence, setDateOccurrence] = useState("");
  const [typeOccurrence, setTypeOccurrenc] = useState("");
  const [report, setReport] = useState("");
  const [specification, setSpecification] = useState("");

  const handleClose = () => {
    dispatch(CreatorsPatrimonyOccurrence.hideModalCreateOccurrencePatrimony());
    setDateOccurrence("");
    setTypeOccurrenc("");
    setReport("");
    setSpecification("");
  };

  const deletePatrimony = (e) => {
    e.preventDefault();

    var occurrence = {
      patrimony_id,
      occurrence_item_id: typeOccurrence,
      date_occurrence: dateOccurrence,
      report,
      specification,
    };

    dispatch(
      CreatorsPatrimonyOccurrence.createOccurrencePatrimonyRequest(occurrence)
    );

    handleClose();
  };

  useEffect(() => {
    if (visible) {
      dispatch(CreatorsOccurrenceItem.readTesteOccurrenceItemRequest());
    }
  }, [dispatch, visible]);

  const occurrence = useSelector((state) => state.occurrence.occurrence_items);
  const loading = useSelector(
    (state) => state.occurrence.loading_occurrence_items
  );

  return (
    <div>
      <Dialog
        open={visible}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={deletePatrimony}>
          <DialogTitle id="alert-dialog-title">{"Ocorrência"}</DialogTitle>
          <DialogContent style={{ marginTop: "10px", marginBottom: "10px" }}>
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

            <FormControl
              variant="outlined"
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
              size="small"
              fullWidth
              value={typeOccurrence}
              onChange={(e) => {
                setTypeOccurrenc(e.target.value);
              }}
              disabled={loading}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Tipo da ocorrência
              </InputLabel>
              <Select native size="small" fullWidth label="Tipo da ocorrência">
                <option value="" />
                {occurrence.map((local) => (
                  <option value={local.id} key={local.id}>
                    {local.description}
                  </option>
                ))}
              </Select>
            </FormControl>

            <TextField
              variant="outlined"
              required
              margin="dense"
              label="Laudo"
              type="text"
              fullWidth
              rows={3}
              multiline
              style={{ marginTop: "10px", marginBottom: "10px" }}
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
              style={{ marginTop: "10px" }}
              value={specification}
              onChange={(e) => setSpecification(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
            <Button color="primary" type="submit">
              Adicionar ocorrência
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
