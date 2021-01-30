import React, { useState } from "react";
import axios from "axios";
import FileDownload from "js-file-download";
import moment from "moment";
import { useSelector } from "react-redux";

import { Typography, Grid, TextField, Button } from "@material-ui/core/";

export default function Create() {
  const [dateInitial, setDateInitial] = useState();
  const [dateFinally, setDateFinally] = useState();
  const prefecture = useSelector((state) => state.prefecture);

  const handleReport = async () => {
    const response = await axios.post(
      "http://127.0.0.1:3333/reports/transfer",
      {
        date_init: dateInitial,
        date_finally: dateFinally,
        prefecture_id: prefecture.prefecture.id,
      },
      {
        responseType: "blob",
      }
    );

    FileDownload(response.data, "relatorio.pdf");
  };

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
        <Typography variant="h4">Transferência</Typography>
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
              <Typography variant="button">
                Período de transferências:
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateInitial(event.target.value)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                type="date"
                onChange={(event) => setDateFinally(event.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "25px", width: "100%" }}>
        <Button
          variant="contained"
          style={{ color: "#0174DF", width: "100%" }}
          type="submit"
          onClick={handleReport}
        >
          Gerar
        </Button>
      </Grid>
    </Grid>
  );
}
