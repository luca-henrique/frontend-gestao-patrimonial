import React from "react";

import { Creators as CreatorsAccount } from "~/store/ducks/account";

import CreateLogin from "./components/body-page/";

import { useSelector, useDispatch } from "react-redux";

import { Typography, Modal, Backdrop, Fade, Grid } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "45%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector((state) => state.account.create_account);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(CreatorsAccount.hideNewAccount());
  };

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
            border: "2px solid #a4a4a4",
            borderRadius: "5px",
          }}
          className={classes.modal}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",

                  justifyContent: "flex-end",
                }}
              >
                <Close
                  color="secondary"
                  style={{
                    padding: "0px",
                  }}
                  onClick={handleClose}
                  fontSize="large"
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              style={{
                marginLeft: "60px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h4">Cria nova conta</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <CreateLogin />
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
