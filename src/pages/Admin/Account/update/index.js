import React from "react";

import CreateLogin from "./components/body-page/";
import { Creators as CreatorsAccount } from "~/store/ducks/account";

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

export default function Update() {
  const classes = useStyles();
  const visible = useSelector((state) => state.account.update_account.visible);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(CreatorsAccount.hideUpdateAccount());
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
      open={visible || false}
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
              <Typography variant="h4">
                Atualizar informações da conta
              </Typography>
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

Update.defaultProps = {
  visible: false,
};
