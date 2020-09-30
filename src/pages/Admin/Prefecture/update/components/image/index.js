import React, { useEffect } from "react";

import { Grid, ButtonBase, Button } from "@material-ui/core/";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import ActionsPrefectureImage from "~/store/ducks/prefecture-image";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import "./styles.css";
import Prefeitura from "~/assets/static/prefeitura.png";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  image: {},
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: "150px",
    height: "150px",
  },
}));

const Image = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const id = useSelector((state) => state.prefecture.prefecture.id);

  useEffect(() => {
    dispatch(ActionsPrefectureImage.readImagePrefectureRequest(id));
  }, [dispatch, id]);

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid
        item
        xs={12}
        sm={12}
        style={{ marginTop: "15px", marginBottom: "15px" }}
      >
        <div
          className={classes.img}
          style={{
            border: "1px solid #D8D8D8",
          }}
        >
          <img
            alt="prefeitura"
            src={Prefeitura}
            width="100%"
            height="100%"
            style={{ margin: "auto" }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            id="contained-button-file"
            style={{ display: "none" }}
            accept="image/*"
            name="image-upload"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button
              style={{
                width: "100%",
                backgroundColor: "rgb(46, 100, 254)",
                color: "#fff",
              }}
              variant="contained"
              component="span"
              size="small"
              startIcon={<CloudUploadIcon />}
            >
              upload
            </Button>
          </label>
        </div>
      </Grid>
    </Grid>
  );
};

export default Image;
