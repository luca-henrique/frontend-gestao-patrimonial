import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimonyLow } from "~/store/ducks/low-patrimony-item";
import { Creators as CreatorsLowItem } from "~/store/ducks/low-item";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const [dateLow, setDateLow] = useState("");
  const [typeLow, setTypeLow] = useState("");
  const [reason, setReason] = useState("");

  const visible = useSelector(
    (state) => state.low_patrimony_item.show_create_low_patrimony.visible
  );

  const patrimony_id = useSelector(
    (state) => state.low_patrimony_item.show_create_low_patrimony.id_patrimony
  );

  const deletePatrimony = (e) => {
    e.preventDefault();

    setDateLow("");
    setTypeLow("");
    setReason("");
  };

  const lows = useSelector((state) => state.low.low_items);

  const handleSubmit = (e) => {
    e.preventDefault();

    var obj = {
      low_item_id: typeLow,
      reason,
      low_date: dateLow,
      patrimony_id,
    };

    dispatch(CreatorsPatrimonyLow.createLowPatrimonyRequest(obj));

    handleClose();
  };

  const handleClose = () => {
    dispatch(CreatorsPatrimonyLow.hideModalCreateLowPatrimony());
  };

  useEffect(() => {
    dispatch(CreatorsLowItem.readLowItemRequest());
  }, [dispatch]);

  return (
    <div>
      <Dialog
        open={visible}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit}>
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

            <FormControl
              variant="outlined"
              style={{ width: "100%" }}
              size="small"
              fullWidth
              value={typeLow}
              onChange={(e) => {
                setTypeLow(e.target.value);
              }}
            >
              <Typography variant="button">Tipo de baixa:</Typography>
              <Select native size="small" fullWidth>
                <option value="" />
                {lows.map((local) => (
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
            <Button color="primary" onClick={handleClose}>
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
