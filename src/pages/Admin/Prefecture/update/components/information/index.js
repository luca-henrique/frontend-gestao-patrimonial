import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";
import { cnpjMask } from "~/pages/util/maskCnpj";
import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsPrefecture } from "~/store/ducks/prefecture";

import Image from "../image/";

const Informacoes = () => {
  const prefecture = useSelector((state) => state.prefecture.prefecture);

  const dispatch = useDispatch();

  const [cnpj, setCnpj] = useState("");
  const [razao, setRazao] = useState("");
  const [nome, setNome] = useState("");

  useEffect(() => {
    setCnpj(prefecture.cnpj);
    setRazao(prefecture.razao);
    setNome(prefecture.nome);
  }, [prefecture.cnpj, prefecture.nome, prefecture.razao]);

  function handleSubmitUpdate() {
    var prefectureUpdate = {
      id: prefecture.id,
      cnpj,
      nome,
      razao,
    };
    if (cnpj.length > 5 && nome.length > 5 && razao.length > 5) {
      dispatch(CreatorsPrefecture.updatePrefectureRequest(prefectureUpdate));
    }
  }

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
      <Grid
        item
        xs={12}
        sm={12}
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <div>
          <Typography variant="h5" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
            Informações da prefeitura
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Image />
      </Grid>
      <Grid item xs={9}>
        <form onBlur={handleSubmitUpdate}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
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

            <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
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

            <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
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
