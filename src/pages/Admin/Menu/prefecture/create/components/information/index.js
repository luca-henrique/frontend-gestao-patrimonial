import React, { useState } from "react";
import { Grid, Typography, TextField } from "@material-ui/core/";

import { cnpjMask } from "../../../../../../util/maskCnpj";

const Information = () => {
  const [cnpj, setCnpj] = useState();
  const [nome, setNome] = useState();
  const [razao, setRazao] = useState();

  function changerCnpj(e) {
    setCnpj(cnpjMask(e.target.value, cnpj));
  }

  function handleInputChanger() {
    var pref = {
      cnpj,
      nome,
      razao,
    };
  }

  return (
    <form>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
          <div>
            <Typography variant="subtitle2" style={{ color: "#BDBDBD" }}>
              CNPJ:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={cnpj}
              onChange={changerCnpj}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={1} />

        <Grid item xs={12} sm={7} style={{ marginTop: "15px" }}>
          <div>
            <Typography variant="subtitle2" style={{ color: "#BDBDBD" }}>
              Nome fantasia:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
          <div>
            <Typography variant="subtitle2" style={{ color: "#BDBDBD" }}>
              Razão:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              type="text"
              value={razao}
              onChange={(e) => setRazao(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default Information;
