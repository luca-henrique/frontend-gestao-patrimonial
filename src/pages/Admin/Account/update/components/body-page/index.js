import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

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

  const account = useSelector((state) => state.account.update_account.data);

  const [nome, setNome] = useState(account.nome);
  const [role, setRole] = useState(account.role);
  const [email, setEmail] = useState(account.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
      id: account.id,
      nome,
      email,
      role,
    };
    dispatch(CreatorsAccount.updateAccountRequest(user));
    handleClose();
  };

  const handleClose = () => {
    dispatch(CreatorsAccount.hideUpdateAccount());
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
              variant="outlined"
              style={{ width: "100%" }}
              size="small"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <Typography variant="button">Função:</Typography>
              <Select native size="small" fullWidth value={role}>
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
              variant="outlined"
              size="small"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.grid}>
          <Button
            variant="contained"
            style={{
              color: "#0174DF",
              width: "100%",
              marginBottom: "50px",
            }}
            type="submit"
          >
            Atualizar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
