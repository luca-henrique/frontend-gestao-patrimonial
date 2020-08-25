import React, { useState, useEffect } from "react";

import { Creators as CreatorsLowItem } from "~/store/ducks/low-item";
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

import { Close } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "35%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const lowItem = useSelector((state) => state.low.update_low_item.data);
  const visible = useSelector((state) => state.low.update_low_item.visible);

  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(lowItem.description);
  }, [lowItem.description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var lowItemObj = {
      id: lowItem.id,
      description,
    };
    setDescription("");
    dispatch(CreatorsLowItem.updateLowItemRequest(lowItemObj));
    handleOnClose();
  };

  const handleOnClose = () => {
    setDescription("");
    dispatch(CreatorsLowItem.hideUpdateLowItem());
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
            borderRadius: "5px",
          }}
          className={classes.modal}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex
          -start"
          >
            <Grid item xs={12} sm={12} style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Close
                  color="secondary"
                  style={{
                    padding: "0px",
                  }}
                  onClick={handleOnClose}
                  fontSize="large"
                />
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              style={{
                marginTop: "30px",
                marginBottom: "30px",
                marginLeft: "60px",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  color: "#a4a4a4",
                }}
              >
                Atualizar informações
              </Typography>
            </Grid>
            <form
              onSubmit={handleSubmit}
              style={{ paddingLeft: "60px", paddingRight: "60px" }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", width: "100%" }}
              >
                <div>
                  <Typography
                    variant="legend"
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                style={{ marginTop: "10px", marginBottom: "60px" }}
              >
                <Button
                  variant="contained"
                  style={{ color: "#0174DF", width: "100%" }}
                  type="submit"
                >
                  Atualizar
                </Button>
              </Grid>
            </form>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}
