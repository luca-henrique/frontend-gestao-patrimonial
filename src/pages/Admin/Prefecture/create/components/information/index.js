import React, { useState } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";
import { cnpjMask } from "~/pages/util/maskCnpj";

import { Creators as ActionsPrefecture } from "~/store/ducks/prefecture";
import { useDispatch } from "react-redux";

const Informacoes = (props) => {
  const [cnpj, setCnpj] = useState("");
  const [razao, setRazao] = useState("");
  const [nome, setNome] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    var prefecture = {
      cnpj,
      nome,
      razao,
    };

    if (nome.length > 5 && cnpj.length > 5 && razao.length > 5) {
      dispatch(ActionsPrefecture.createPrefectureRequest(prefecture));
    }
  };

  function changerCnpj(e) {
    setCnpj(cnpjMask(e.target.value, cnpj));
  }

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingBottom: "10px",
        width: "auto",
      }}
    >
      <Grid item xs={12}>
        <form onBlur={handleSubmit}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
              <div>
                <Typography
                  variant="h5"
                  style={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  Adicionar informações
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginTop: "15px" }}>
              <div>
                <Typography
                  variant="subtitle2"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                >
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
                <Typography
                  variant="subtitle2"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                >
                  Razão:
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={razao}
                  onChange={(e) => setRazao(e.target.value)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
              <div>
                <Typography
                  variant="subtitle2"
                  style={{ color: "rgba(0, 0, 0, 0.54)" }}
                >
                  Nome fantasia:
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={1} />
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Informacoes;
