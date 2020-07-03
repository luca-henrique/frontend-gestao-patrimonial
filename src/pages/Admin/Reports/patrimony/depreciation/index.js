import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Modal,
  Select,
  FormControl,
  Grid,
  TextField,
  Button,
} from "@material-ui/core/";

export default function Create() {
  const dispatch = useDispatch();

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={{
        color: "#a4a4a4",
      }}
    >
      <Grid item xs={12} sm={12}>
        <Typography variant="h4">Depreciação</Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
            <div>
              <Typography variant="button">Período de compra:</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                required
                variant="outlined"
                size="small"
                fullWidth
                type="date"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Tipo de Bem:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Local:</Typography>
          <Select native size="small" fullWidth>
            <option value="" />
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "25px", width: "100%" }}>
        <Button
          variant="contained"
          style={{ color: "#0174DF", width: "100%" }}
          type="submit"
        >
          Gerar
        </Button>
      </Grid>
    </Grid>
  );
}
