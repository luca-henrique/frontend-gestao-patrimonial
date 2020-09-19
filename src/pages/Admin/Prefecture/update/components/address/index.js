import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsPrefectureAddress } from "~/store/ducks/prefecture_address";

function Address() {
  const address = useSelector((state) => state.prefecture_address.address);

  const loading = useSelector((state) => state.prefecture_address.loading);

  const dispatch = useDispatch();

  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");

  useEffect(() => {
    dispatch(CreatorsPrefectureAddress.readPrefectureAddressRequest());

    setCep(address.cep);
    setCidade(address.cidade);
    setEstado(address.estado);
    setBairro(address.bairro);
    setRua(address.rua);
    setComplemento(address.complemento || "");
    setNumero(address.numero);
  }, [
    address.bairro,
    address.cep,
    address.cidade,
    address.complemento,
    address.estado,
    address.numero,
    address.rua,
    dispatch,
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    var addressUpdate = {
      id: address.id,
      cep,
      cidade,
      estado,
      bairro,
      complemento,
      rua,
      numero,
    };

    if (cep.length > 5 && numero > 0) {
      dispatch(
        CreatorsPrefectureAddress.updatePrefectureAddressRequest(addressUpdate)
      );
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

  if (loading) {
    return <></>;
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
              onChange={(e) => setBairro(e.target.value)}
              value={bairro}
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
              variant="outlined"
              size="small"
              fullWidth
              value={rua}
              onChange={(e) => setRua(e.target.value)}
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

export default Address;
