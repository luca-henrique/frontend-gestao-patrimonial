import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsPatrimonyDelete } from "~/store/ducks/delete-patrimony-item";

export default function AlertDialog() {
  const dispatch = useDispatch();

  const patrimony_id = useSelector(
    (state) => state.patrimony_item.show_patrimony.id
  );

  const visible = useSelector(
    (state) => state.delete_patrimony_item.delete_admin.visible
  );

  const handleClose = () => {
    dispatch(CreatorsPatrimonyDelete.hideModalDeletePatrimonyAdmin());
  };

  const deletePatrimony = () => {
    dispatch(CreatorsPatrimonyDelete.deletePatrimonyAdminRequest(patrimony_id));
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
        <DialogTitle id="alert-dialog-title" color="secondary">
          Alerta!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você realmente deseja deletar esse patrimônio ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Não
          </Button>
          <Button onClick={deletePatrimony} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
