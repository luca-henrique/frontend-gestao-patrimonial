import React, { useState } from "react";

import { Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "~/assets/images/empresa-logo.png";
import Copyright from "../Copyright/";

import TextField from "./components/validation-text-field/";

import LicenseActions from "~/store/ducks/license";

import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(5),
      marginTop: "2%",
      width: "300px",
      height: "250px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "2%",
      height: "300px",
      width: "400px",
    },
  },
}));

export default function(props) {
  const [token, setToken] = useState("");

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmitToken = (e) => {
    e.preventDefault();
    dispatch(LicenseActions.licenseRequest(token));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={classes.main}>
        <img src={Logo} width="100%" height="100%" alt="Sistem de patrimônio" />
      </div>
      <form
        onSubmit={handleSubmitToken}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={classes.main}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          align="center"
          style={{ fontSize: "28px", marginBottom: "5%" }}
        >
          Informe a chave para o acesso
        </Typography>
        <TextField
          variant="outlined"
          required
          size="small"
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          style={{ width: "100%", marginBottom: "5%", fontSize: "20px" }}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#04B4AE",
            color: "#ffff",
          }}
        >
          Verificar
        </Button>
      </form>
      <div style={{ position: "absolute", bottom: "5px", width: "100%" }}>
        <Copyright />
      </div>
    </div>
  );
}
