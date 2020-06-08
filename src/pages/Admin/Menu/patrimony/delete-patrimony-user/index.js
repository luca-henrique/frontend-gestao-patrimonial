import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsPatrimonyDelete } from "../../../../../store/ducks/delete-patrimony-item";
import TextField from "@material-ui/core/TextField";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const patrimony_id = useSelector(
    (state) => state.patrimony_item.show_patrimony.id
  );

  const visible = useSelector(
    (state) => state.delete_patrimony_item.delete_user.visible
  );

  const handleClose = () => {
    dispatch(CreatorsPatrimonyDelete.hideModalDeletePatrimonyUser());
  };

  const deletePatrimony = (e) => {
    e.preventDefault();
    dispatch(
      CreatorsPatrimonyDelete.deletePatrimonyUserRequest(
        { email, password },
        patrimony_id
      )
    );
    handleClose();
    setEmail("");
    setPassword("");
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
            {"Informe o email e a senha do admnistrador"}
          </DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              margin="dense"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
