import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog() {
  const deletePatrimony = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Dialog
        open={false}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={deletePatrimony}>
          <DialogTitle id="alert-dialog-title">
            {"Deseja remover a baixa do patrimônio?"}
          </DialogTitle>
          <DialogContent>
            {"Clique em sim caso deseje continuar."}
          </DialogContent>
          <DialogActions>
            <Button color="primary">Não</Button>
            <Button color="primary" type="submit">
              Sim
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
