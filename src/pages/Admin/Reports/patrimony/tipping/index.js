import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import FileDownload from "js-file-download";
import moment from "moment"

import {
  Typography,
  Grid,
  TextField,
  FormControl,
  Select,
  Button,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "55%",
    },
    [theme.breakpoints.up("md")]: {
      width: "20%",
      height: "40%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector((state) => state.good.create_good_item);

  const dispatch = useDispatch();

  const [organ, setOrgan] = useState();
  const [sector, setSector] = useState();
  const [unit, setUnit] = useState();
  const [dateInitial, setDateInitial] = useState();
  const [dateFinally, setDateFinally] = useState();

  /**
   * orgaos
   */
  const locals = useSelector((state) => state.locale.locale_items);
  /**
   * setores
   */
  const sectors = useSelector((state) => state.sectors.sector);
  /**
   * unidades
   */
  const units = useSelector((state) => state.units.units);

  const prefecture = useSelector((state) => state.prefecture);

  const handleReport = async () => {
    const response = await axios.post(
      "http://127.0.0.1:3333/reports/patrimony/tipping",
      {
        value_init: dateInitial,
        value_finally: dateFinally,
        organ_id: organ,
        sector_id: sector,
        unit_id: unit,
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
        <Typography variant="h4">Tombamento</Typography>
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
              <Typography variant="button">Numero do tombamento:</Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">De:</Typography>
              <TextField
                defaultValue="0"
                variant="outlined"
                size="small"
                fullWidth
                type="number"
                onChange={(event) => setDateInitial(event.target.value)}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={2} />

          <Grid item xs={12} sm={5} style={{ marginTop: "10px" }}>
            <div>
              <Typography variant="button">Até:</Typography>
              <TextField
                defaultValue="0"
                variant="outlined"
                size="small"
                fullWidth
                type="number"
                onChange={(event) => setDateFinally(event.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "20px" }}>
        <div>
          <Typography variant="button">Local:</Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%" }}
          size="small"
          fullWidth
        >
          <Typography variant="button">Orgão:</Typography>
          <Select
            native
            size="small"
            fullWidth
            style={{ paddingLeft: "5px" }}
            onChange={(event) => setOrgan(event.target.value)}
          >
            <option value="" />
            {locals.map((lc) => (
              <option key={lc.id} value={lc.id}>
                {lc.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%", paddingLeft: "5px" }}
          size="small"
          fullWidth
        >
          <Typography variant="button">Setor:</Typography>
          <Select
            native
            size="small"
            fullWidth
            style={{ paddingLeft: "5px" }}
            onChange={(event) => setSector(event.target.value)}
          >
            <option value="" />
            {sectors.map((st) => (
              <option key={st.id} value={st.id}>
                {st.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={4} style={{ marginTop: "10px" }}>
        <FormControl
          variant="outlined"
          style={{ width: "100%", paddingLeft: "5px" }}
          size="small"
          fullWidth
        >
          <Typography variant="button">Únidade:</Typography>
          <Select
            native
            size="small"
            fullWidth
            style={{ paddingLeft: "5px" }}
            onChange={(event) => setUnit(event.target.value)}
          >
            <option value="" />
            {units.map((ut) => (
              <option value={ut.id} key={ut.id}>
                {ut.description}
              </option>
            ))}
          </Select>
        </FormControl>
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
