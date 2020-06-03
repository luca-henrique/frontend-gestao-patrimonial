import React from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

const Low = () => {
  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <h2>Baixa</h2>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <div>
          <Typography variant="button">Tipo de baixa:</Typography>
          <TextField variant="outlined" size="small" fullWidth />
        </div>
      </Grid>

      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Data:</Typography>
          <TextField variant="outlined" size="small" fullWidth type="date" />
        </div>
      </Grid>

      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Motivo:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            type="text"
            multiline
            rows="2"
          />
        </div>
      </Grid>
    </>
  );
};

export default Low;
