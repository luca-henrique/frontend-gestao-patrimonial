import React, { useState } from "react";

import { Typography, TextField, Button } from "@material-ui/core/";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { Form, Container } from "./components/";

import Copyright from "./components/copyright";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#000",
      borderWidth: 1
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#2E64FE",
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <div>
          <Typography variant="h2" style={{ color: "#fff" }}>
            Gestão de Patrimônio
          </Typography>
        </div>
        <Form>
          <div className={classes.title}>
            <Typography variant="h3" className={classes.typography}>
              Entrar
            </Typography>
          </div>
          <div className={classes.button}>
            <Typography variant="button" className={classes.typography}>
              Email
            </Typography>
            <ValidationTextField
              variant="outlined"
              size="small"
              fullWidth
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.button}>
            <Typography variant="button" className={classes.typography}>
              Senha
            </Typography>
            <ValidationTextField
              variant="outlined"
              size="small"
              fullWidth
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.signIn}>
            <Button variant="contained" fullWidth className={classes.title}>
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

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: "linear-gradient(160deg, #039dfb 0%, #1f2f61 78%)",
    width: "100%",
    height: "100%"
  },

  img: {
    width: "450px",
    height: "200",
    marginTop: "40px",

    [theme.breakpoints.down("sm")]: {
      width: "300px"
    },
    [theme.breakpoints.up("md")]: {
      width: "500px"
    },
    [theme.breakpoints.up("lg")]: {}
  },
  title: {
    marginBottom: "30px"
  },
  typography: {
    color: "#000"
  },
  button: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "100%"
  },
  signIn: {
    width: "100%",
    marginTop: "15px"
  }
}));
