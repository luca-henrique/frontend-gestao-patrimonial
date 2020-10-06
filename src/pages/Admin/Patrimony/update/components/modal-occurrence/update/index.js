import React, { useState, useEffect } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

import { formatDate } from "~/util/formatDate";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimonyOccurrence } from "~/store/ducks/occurrence-patrimony-item";
import { Creators as CreatorsOccurrenceItem } from "~/store/ducks/occurrence-item";
import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const visible = useSelector(
    (state) =>
      state.occurrente_patrimony_item.update_occurrence_patrimony.visible
  );

  const data = useSelector(
    (state) => state.occurrente_patrimony_item.read_occurrence_patrimony
  );

  const exist = useSelector(
    (state) => state.occurrente_patrimony_item.exist_occurrence_patrimony
  );

  useEffect(() => {
    if (visible && exist) {
      dispatch(CreatorsOccurrenceItem.readTesteOccurrenceItemRequest());
      setDateOccurrence(data.date_occurrence);
      setTypeOccurrenc(data.occurrence_item_id);
      setReport(data.report);
      setSpecification(data.specification);
    }
  }, [
    data.date_occurrence,
    data.occurrence_item_id,
    data.report,
    data.specification,
    dispatch,
    exist,
    visible,
  ]);

  const [dateOccurrence, setDateOccurrence] = useState("");
  const [typeOccurrence, setTypeOccurrenc] = useState("");
  const [report, setReport] = useState("");
  const [specification, setSpecification] = useState("");

  const handleClose = () => {
    dispatch(CreatorsPatrimonyOccurrence.hideModalUpdateOccurrencePatrimony());
  };

  const occurrence = useSelector((state) => state.occurrence.occurrence_items);
  const loading = useSelector(
    (state) => state.occurrence.loading_occurrence_items
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    var occurrence = {
      id: data.id,
      occurrence_item_id: typeOccurrence,
      date_occurrence: dateOccurrence,
      report,
      specification,
    };

    dispatch(
      CreatorsPatrimonyOccurrence.updateOccurrencePatrimonyRequest(occurrence)
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
        <form onSubmit={handleSubmit}>
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
              value={formatDate(dateOccurrence)}
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
              <Select
                native
                size="small"
                fullWidth
                label="Tipo da ocorrência"
                value={typeOccurrence}
              >
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
