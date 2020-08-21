import React, { useState } from "react";

import { Creators as CreatorsOccurrenceItem } from "~/store/ducks/occurrence-item";
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
      height: "45%",
    },
    [theme.breakpoints.up("md")]: {
      width: "20%",
      height: "35%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const visible = useSelector(
    (state) => state.occurrence.create_occurrence_item
  );

  const dispatch = useDispatch();

  const [descricao, setDescricao] = useState("");

  const handleOnClose = () => {
    dispatch(CreatorsOccurrenceItem.hideNewOccurrenceItem());
    setDescricao("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var obj = {
      description: descricao,
    };

    dispatch(CreatorsOccurrenceItem.createOccurrenceItemRequest(obj));

    handleOnClose();
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
          <form onSubmit={handleSubmit}>
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
                  Ocorrência
                </Typography>
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
            </Grid>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}
