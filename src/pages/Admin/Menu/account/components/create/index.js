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
        ></div>
      </Fade>
    </Modal>
  );
}
