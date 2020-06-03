import React, { useState } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

const Purchase = () => {
  //toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  const value = 600;
  const [acquisitionValue, setAcquisitionValue] = useState(
    value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );

  return (
    <>
      <Grid item xs={12} sm={12} style={{ marginTop: "30px" }}>
        <h2>Informação da aquisição</h2>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <div>
          <Typography variant="button">Licitação:</Typography>
          <TextField variant="outlined" size="small" fullWidth />
        </div>
      </Grid>

      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Empenho:</Typography>
          <TextField variant="outlined" size="small" fullWidth />
        </div>
      </Grid>

      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Data de compra:</Typography>
          <TextField variant="outlined" size="small" fullWidth type="date" />
        </div>
      </Grid>

      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Valor da aquisição:</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={acquisitionValue}
            onChange={(e) => setAcquisitionValue(e.target.value)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Nº da nota fiscal:</Typography>
          <TextField variant="outlined" size="small" fullWidth />
        </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <div>
          <Typography variant="button">Data da nota fiscal:</Typography>
          <TextField variant="outlined" size="small" fullWidth type="date" />
        </div>
      </Grid>
    </>
  );
};

export default Purchase;
