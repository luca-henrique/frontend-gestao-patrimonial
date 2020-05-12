import React, { useState } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

export default function Components() {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState();

  function handleSubmit() {
    var addr = {
      prefecture_id: 1,
      cep,
      cidade,
      estado,
      bairro,
      complemento,
      rua,
      numero,
    };
  }

  function getCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setCidade(data.localidade);
        setRua(data.logradouro);
        setBairro(data.bairro);
        setEstado(data.uf);
        setComplemento(data.complemento);
      })
      .catch((err) => {});
  }

  function format(d) {
    d = soNumeros(d);
    d = d.replace(/^(\d{5})(\d)/, "$1-$2");
    if (d.length === 9) {
      getCep(d);
    }
    return d;
  }

  function soNumeros(d) {
    return d.replace(/\D/g, "");
  }

  return (
    <form>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ marginTop: "10px" }}
      >
        <Grid item xs={12} sm={2}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              CEP:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => {
                setCep(format(e.target.value));
              }}
              value={cep}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={1} />

        <Grid item xs={12} sm={6}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              Cidade:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setCidade(e.target.value)}
              value={cidade}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={1} />

        <Grid item xs={12} sm={2}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              UF:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={2} />

        <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              Bairro:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setBairro(e.target.value)}
              value={bairro}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              Rua:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setRua(e.target.value)}
              value={rua}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={10} style={{ marginTop: "10px" }}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              Complemento:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setComplemento(e.target.value)}
              value={complemento}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={1} />

        <Grid item xs={12} sm={1} style={{ marginTop: "10px" }}>
          <div>
            <Typography variant="button" style={{ color: "#BDBDBD" }}>
              Nº:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setNumero(e.target.value)}
              value={numero}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
