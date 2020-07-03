import React, { useState } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

import { Creators as CreatorsAddress } from "~/store/ducks/prefecture_address";
import { useDispatch } from "react-redux";

const Address = () => {
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    var address = {
      cep,
      cidade,
      estado,
      bairro,
      complemento,
      rua,
      numero,
    };

    if (cep.length > 5 && numero.length > 1) {
      console.log("foi");
      dispatch(CreatorsAddress.createPrefectureAddressRequest(address));
    }
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
    <form onBlur={handleSubmit}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          <div>
            <Typography variant="h5" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
              Endereço
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={2}>
          <div>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              CEP:
            </Typography>
            <TextField
              required
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
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Cidade:
            </Typography>
            <TextField
              required
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
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              UF:
            </Typography>
            <TextField
              required
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
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Bairro:
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
          <div>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Rua:
            </Typography>
            <TextField
              required
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setRua(e.target.value)}
              value={rua}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={9} style={{ marginTop: "10px" }}>
          <div>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
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

        <Grid item xs={12} sm={2} style={{ marginTop: "10px" }}>
          <div>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Nº:
            </Typography>
            <TextField
              required
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
};

export default Address;
