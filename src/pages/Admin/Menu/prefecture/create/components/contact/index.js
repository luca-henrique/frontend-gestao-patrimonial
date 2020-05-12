import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography, TextField } from "@material-ui/core/";

import formatPhoneNumber from "../../../../../../util/formatPhoneNumber";

export default function Components() {
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  function handleSubmit(e) {
    var cont = {
      prefecture_id: 1,
      numero: number,
      email: email,
    };
  }

  return (
    <form onBlur={handleSubmit}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "10px" }}
      >
        <Grid item xs={12} sm={5}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              Telefone(Fixo/Celular):
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setNumber(formatPhoneNumber(e.target.value))}
              value={number}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={2} />

        <Grid item xs={12} sm={5}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              E-mail:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
