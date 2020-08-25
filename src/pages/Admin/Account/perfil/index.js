import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Creators as CreatorsAccount } from "~/store/ducks/account";

import { Typography, Grid } from "@material-ui/core/";
import { FormControl, Tooltip } from "@material-ui/core/";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import { Lock } from "@material-ui/icons/";
import Skeleton from "@material-ui/lab/Skeleton";

import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "20px",
  },
  icon: {
    color: "#a4a4a4",
  },
}));

export default function Update() {
  const account = useSelector((state) => state.account.account_joined);

  const loading = useSelector((state) => state.account.loading_account_joined);

  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsAccount.readAccountJoinedRequest());
    setEmail(account.email);
    setNome(account.nome);
    setRole(account.role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account.email, account.nome, account.role]);

  const [nome, setNome] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var user = {
      id: account.id,
      nome,
      email,
      role,
    };
    if (account.email !== email) {
      dispatch(CreatorsAccount.updateAccountRequest(user));
    } else {
      var other = {
        id: account.id,
        nome,
        role,
      };
      dispatch(CreatorsAccount.updateAccountRequest(other));
    }
  };

  if (loading) {
    return (
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      </>
    );
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h4" className={classes.icon}>
              Minha conta
            </Typography>
          </div>
          <div>
            <Tooltip title="Alterar senha">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                className={classes.icon}
                onClick={() =>
                  dispatch(CreatorsAccount.showChangePasswordAccount())
                }
              >
                <Lock />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={12}>
        <form onBlur={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} className={classes.grid}>
              <div>
                <Typography variant="subtitle2">Nome:</Typography>
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
                <Typography variant="subtitle2">E-mail:</Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Grid>

            {account.role ? (
              <Grid item xs={12} sm={12} className={classes.grid}>
                <div>
                  <FormControl
                    required
                    variant="outlined"
                    style={{ width: "100%" }}
                    size="small"
                    fullWidth
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <Typography variant="subtitle2">Função:</Typography>
                    <Select native size="small" fullWidth value={role} required>
                      <option value="" />
                      <option value="true">administrador</option>
                      <option value="false">funcionário</option>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
            ) : (
              <> </>
            )}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
