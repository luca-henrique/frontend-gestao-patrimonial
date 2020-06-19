import React, { useState } from "react";

import { Typography, TextField, Button } from "@material-ui/core/";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import AuthActions from "~/store/ducks/auth";
import { useDispatch, useSelector } from "react-redux";

import { Form, Container } from "./components/";

import Copyright from "./components/copyright";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "#A4A4A4",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#2E64FE",
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };

  return (
    <>
      <Container className={classes.container}>
        <div className={classes.header}>
          <Typography className={classes.title_header}>
            Gestão de Patrimônio
          </Typography>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className={classes.title}>
            <Typography variant="h3" className={classes.typography}>
              Entrar
            </Typography>
          </div>
          <div className={classes.input}>
            <Typography variant="button" className={classes.typography}>
              Email:
            </Typography>
            <ValidationTextField
              required
              variant="outlined"
              size="small"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <Typography variant="button" className={classes.typography}>
              Senha:
            </Typography>
            <ValidationTextField
              required
              variant="outlined"
              size="small"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.signIn}>
            <Button
              variant="contained"
              fullWidth
              className={classes.button}
              type="submit"
            >
              Entrar
            </Button>
          </div>
        </Form>
        <div style={{ position: "absolute", bottom: "5px", width: "100%" }}>
          <Copyright />
        </div>
      </Container>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "linear-gradient(160deg, #039dfb 0%, #1f2f61 78%)",
    width: "100%",
    height: "100%",
  },

  header: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "20%",
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      width: "100%",
      height: "20%",
      marginTop: "5%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
    },
  },

  title_header: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
    },
  },

  title: {
    marginBottom: "30px",
  },
  typography: {
    color: "#A4A4A4",
  },
  input: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
  },
  button: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%",
    color: "#1f2f61",
  },

  footer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "20%",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "60px",
    },
  },

  signIn: {
    width: "100%",
    marginTop: "15px",
  },
}));
