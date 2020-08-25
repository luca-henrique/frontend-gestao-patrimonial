import React, { useState } from "react";

import { Creators as CreatorsAccount } from "~/store/ducks/account";

import { useDispatch, useSelector } from "react-redux";

import { toastr } from "react-redux-toastr";

import { Modal, Typography, Button, TextField } from "@material-ui/core/";

import { Close } from "@material-ui/icons/";

import "./style.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
}));

export default function ChangerPassword() {
  const visible = useSelector(
    (state) => state.account.password_account.visible
  );

  const id = useSelector((state) => state.account.account_joined.id);

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");

  const [password1, setPassword1] = useState("");

  const classe = useStyles();

  function changePassword(e) {
    e.preventDefault();

    if (
      password !== password1 ||
      password === "null" ||
      password === "" ||
      password1 === "null" ||
      password1 === ""
    ) {
      toastr.error("Password invalido ou nulo");
    } else {
      var senha = {
        id,
        password,
      };
      dispatch(CreatorsAccount.changerPasswordRequest(senha));
      hide();
    }
  }

  function hide() {
    dispatch(CreatorsAccount.hideChangePasswordAccount());
  }

  return (
    <div>
      <Modal
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={visible}
      >
        <div
          className={classe.modal}
          style={{
            backgroundColor: "#fff",
            width: "500px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Close
              onClick={hide}
              color="secondary"
              style={{
                padding: "0px",
              }}
              fontSize="large"
            />
          </div>

          <div
            style={{
              marginLeft: "60px",
              marginTop: "10px",
              marginBottom: "15px",
            }}
          >
            <Typography variant="h4" style={{ color: "#0174DF" }}>
              Alterar senha
            </Typography>
          </div>

          <form
            onSubmit={changePassword}
            style={{ paddingLeft: "60px", paddingRight: "60px" }}
          >
            <div style={{ marginTop: "20px" }}>
              <Typography variant="legend">Nova senha:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <Typography variant="legend">Confirmar senha:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>

            <div>
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  color: "#0174DF",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
                type="submit"
              >
                Alterar senha
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

ChangerPassword.defaultProps = {
  visible: false,
  password: "",
  password1: "",
};
