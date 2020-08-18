import React, { useState } from "react";

//import { toastr } from "react-redux-toastr";
import { useDispatch } from "react-redux";

import { Creators as CreatorsAccount } from "~/store/ducks/account";

import { FormControl, Button } from "@material-ui/core/";
import Select from "@material-ui/core/Select";
import { TextField, Grid, Typography } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

export default function Create() {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [nome, setNome] = useState("");
  const [role, setRole] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      var account = {
        nome,
        email,
        password,
        role,
      };
      dispatch(CreatorsAccount.createAccountRequest(account));
      handleClose();
    } catch (error) {}
  };

  const handleClose = () => {
    dispatch(CreatorsAccount.hideNewAccount());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ paddingLeft: "60px", paddingRight: "60px" }}
    >
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.label}
      >
        <Grid item xs={12} sm={12} className={classes.grid}>
          <div>
            <Typography variant="button">Nome:</Typography>
            <TextField
              required
              variant="outlined"
              size="small"
              fullWidth
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.grid}>
          <div>
            <FormControl
              required
              variant="outlined"
              style={{ width: "100%" }}
              size="small"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <Typography variant="button">Função:</Typography>
              <Select native size="small" fullWidth>
                <option value="" />
                <option value="true">administrador</option>
                <option value="false">funcionário</option>
              </Select>
            </FormControl>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.grid}>
          <div>
            <Typography variant="button">E-mail:</Typography>
            <TextField
              required
              variant="outlined"
              size="small"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.grid}>
          <div>
            <Typography variant="button">Senha:</Typography>
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
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          className={classes.grid}
          style={{ marginBottom: "50px" }}
        >
          <Button
            variant="contained"
            style={{ color: "#0174DF", width: "100%" }}
            type="submit"
          >
            Criar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
