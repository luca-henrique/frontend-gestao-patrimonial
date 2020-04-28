import React from "react";

import CreateLogin from "./components/body-page/";

import { useDispatch, useSelector } from "react-redux";

import { Creators as CreatorsAccount } from "../../../../../../store/ducks/account";

import {
  Typography,
  Button,
  Modal,
  Backdrop,
  Fade,
  Grid,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: "50%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector((state) => state.account.create);
  const dispatch = useDispatch();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visible}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            border: "2px solid #a4a4a4",
            borderRadius: "5px",
          }}
          className={classes.modal}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h5"
                style={{
                  color: "#a4a4a4",
                  textAlign: "center",
                }}
              >
                Nova Conta
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CreateLogin />

              <div style={{ width: "100%", marginTop: "20px" }}>
                <Button
                  variant="contained"
                  style={{ color: "#0174DF", width: "100%" }}
                >
                  Criar
                </Button>
              </div>
              <div>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: "15px",
                    marginBottom: "5px",
                  }}
                  onClick={() => dispatch(CreatorsAccount.hideNewAccount())}
                >
                  Fechar
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
