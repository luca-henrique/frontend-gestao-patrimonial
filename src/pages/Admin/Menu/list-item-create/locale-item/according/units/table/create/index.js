import React, { useState } from "react";

import { Creators as CreatorsUnits } from "~/store/ducks/units";
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
      width: "100%",
      height: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: "40%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector((state) => state.units.create_units);

  const id_sector = useSelector((state) => state.units.units_list.id_sector);

  const dispatch = useDispatch();

  const [descricao, setDescricao] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var unit = {
      id_sector,
      descricao,
      responsavel,
    };

    dispatch(CreatorsUnits.createUnitRequest(unit));
    handleOnClose();
  };

  const handleOnClose = () => {
    setResponsavel("");
    setDescricao("");
    dispatch(CreatorsUnits.hideNewUnits());
  };

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
                  color: "#a4a4a4",
                }}
              >
                Únidate
              </Typography>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "25px", width: "100%" }}
              >
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

              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "25px", width: "100%" }}
              >
                <div>
                  <Typography
                    variant="button"
                    style={{
                      color: "#a4a4a4",
                    }}
                  >
                    Responsável:
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={responsavel}
                    onChange={(e) => setResponsavel(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "25px", width: "100%" }}
              >
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                    width: "100%",
                  }}
                  onClick={handleOnClose}
                >
                  Fechar
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "25px", width: "100%" }}
              >
                <Button
                  variant="contained"
                  style={{ color: "#0174DF", width: "100%" }}
                  type="submit"
                >
                  Criar
                </Button>
              </Grid>
            </form>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
