import React, { useState } from "react";

import { useDispatch } from "react-redux";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";

import {
  TextField,
  Grid,
  Typography,
  FormControlLabel,
  withStyles,
  Checkbox,
} from "@material-ui/core/";
import { toastr } from "react-redux-toastr";
import { green } from "@material-ui/core/colors";

export default function Create() {
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [role, setRole] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form style={{ marginTop: "15px" }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
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
                  <Select native size="small" fullWidth>
                    <option value="" />
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <div>
              <Typography variant="button">Nome:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
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

          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Senha:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

const GreenCheckbox = withStyles({
  root: {
    color: green[200],
    "&$checked": {
      color: green[300],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
