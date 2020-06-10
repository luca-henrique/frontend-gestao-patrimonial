import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Creators as CreatorsTransfer } from "~/store/ducks/transference-patrimony-item";

import { Typography, Modal, Backdrop, Fade, Grid } from "@material-ui/core/";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    border: "1px solid #D8D8D8",
    color: "#BDBDBD",
    borderRadius: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "420px",
      width: "450px",
    },
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      overflowY: "scroll",
      height: "100%",
      display: "inline-block",
    },
  },

  button: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px !important",
    },
  },
}));

const Create = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [institution, setInstitution] = useState("");
  const [sector, setSector] = useState("");
  const [unit, setUnit] = useState("");

  const visible = useSelector(
    (state) =>
      state.transfer_patrimony_item.show_modal_update_transference_patrimony
        .visible
  );

  const transference = useSelector(
    (state) =>
      state.transfer_patrimony_item.show_modal_update_transference_patrimony
        .transference
  );

  console.log(transference.id);

  function create(e) {
    e.preventDefault();

    var transfer = {
      id: transference.id,
      institution,
      sector,
      unit,
    };

    console.log(transfer);

    //dispatch(CreatorsTransfer.updateTransferenceRequest(transference));
    hide();
  }

  const hide = () => {
    dispatch(CreatorsTransfer.hideModalUpdateTransferencePatrimony());
  };

  return (
    <Modal
      className={classes.main}
      open={visible}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <form onSubmit={create}>
        <Fade in={visible}>
          <div className={classes.modal}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", textAlign: "center" }}
              >
                <Typography variant="h4">Editar</Typography>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <Grid container direction="column">
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                      >
                        <Typography variant="button">Orgão:</Typography>
                        <Select native size="small" fullWidth>
                          <option value="" />
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                      >
                        <Typography variant="button">Setor:</Typography>
                        <Select native size="small" fullWidth>
                          <option value="" />
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                    <div>
                      <FormControl
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                      >
                        <Typography variant="button">Únidade:</Typography>
                        <Select native size="small" fullWidth>
                          <option value="" />
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  color="default"
                  fullWidth
                  style={{ backgroundColor: "#DF013A", color: "#fff" }}
                  onClick={hide}
                >
                  Fechar
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
                <Button
                  variant="contained"
                  color="default"
                  fullWidth
                  style={{ backgroundColor: "#0174DF", color: "#fff" }}
                  type="submit"
                >
                  Atualizar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </form>
    </Modal>
  );
};

export default Create;
