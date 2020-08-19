import React, { useState } from "react";

import { Creators as CreatorsGoodItem } from "~/store/ducks/good-item";
import { useSelector, useDispatch } from "react-redux";

import PercentField from "~/components/textFieldPercent";

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

  const [descricao, setDescricao] = useState("");
  const [depreciacao, setDepreciacao] = useState("");

  const handleOnClose = () => {
    dispatch(CreatorsGoodItem.hideNewGoodItem());
    setDepreciacao("");
    setDescricao("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var obj = {
      description: descricao,
      depreciation: depreciacao,
    };

    dispatch(CreatorsGoodItem.createGoodItemRequest(obj));

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
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <form onSubmit={handleSubmit}>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="h4"
                  style={{
                    color: "#a4a4a4",
                  }}
                >
                  Bem
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
                    variant="subtitle2"
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
                    type="text"
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
                    variant="subtitle2"
                    style={{
                      color: "#a4a4a4",
                    }}
                  >
                    Depreciação:
                  </Typography>
                  <TextField
                    required
                    variant="outlined"
                    size="small"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: PercentField,
                    }}
                    fullWidth
                    value={depreciacao}
                    onChange={(e) => setDepreciacao(e.target.value)}
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
