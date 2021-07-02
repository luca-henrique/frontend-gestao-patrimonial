import React, { useState } from "react";
import axios from "axios";
import FileDownload from "js-file-download";
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

  const [locale, setLocale] = useState();
  const [typeGood, setTypeGood] = useState();
  const [dateInital, setDateInitial] = useState();
  const [dateFinally, setDateFinally] = useState();
  /**
   * tipos de bens
   */
  const types_goods = useSelector((state) => state.good.good_items);

  /**
   * locais
   */
  const locails = useSelector((state) => state.locale.locale_items);

  const prefecture = useSelector((state) => state.prefecture);
  const handleReport = async () => {
    const response = await axios.post(
      "http://127.0.0.1:3333/reports/patrimony/depreciation",
      {
        date_initial: dateInital,
        date_finally: dateFinally,
        locale_item_id: locale,
        good_item_id: typeGood,
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
                onChange={(event) => setDateInitial(event.target.value)}
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
                onChange={(event) => setDateFinally(event.target.value)}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "15px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Tipo de Bem:</Typography>
          <Select
            native
            size="small"
            fullWidth
            onChange={(event) => setTypeGood(event.target.value)}
          >
            <option value="" />
            {types_goods.map((tg) => (
              <option key={tg.id} value={tg.id}>
                {tg.description}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={12} style={{ marginTop: "10px" }}>
        <FormControl variant="outlined" size="small" fullWidth>
          <Typography variant="button">Local:</Typography>
          <Select
            native
            size="small"
            fullWidth
            onChange={(event) => setLocale(event.target.value)}
          >
            <option value="" />
            {locails.map((lc) => (
              <option key={lc.id} value={lc.id}>
                {lc.description}
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
