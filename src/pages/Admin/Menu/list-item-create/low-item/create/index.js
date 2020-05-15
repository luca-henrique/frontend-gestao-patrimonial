import React, { useState } from "react";

import { Creators as CreatorsLowItem } from "../../../../../../store/ducks/low-item";
import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  Modal,
  Backdrop,
  Fade,
  Grid,
  TextField,
  Button,
} from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "20%",
      height: "30%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector((state) => state.low.create_low_item);

  const [descricao, setDescricao] = useState("");

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={visible}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={visible}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            border: "2px solid #a4a4a4",
            borderRadius: "5px",
          }}
          className={classes.modal}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h4"
                style={{
                  textAlign: "center",
                }}
              >
                Baixa
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div>
                <Typography
                  variant="button"
                  style={{
                    color: "#a4a4a4",
                  }}
                >
                  Descrição:
                </Typography>
                <TextField
                  required
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={5}>
              <Button>Salvar</Button>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Button>Fechar</Button>
            </Grid>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
