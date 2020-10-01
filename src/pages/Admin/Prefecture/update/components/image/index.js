import React, { useEffect } from "react";

import { Grid, IconButton } from "@material-ui/core/";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import ActionsPrefectureImage from "~/store/ducks/prefecture-image";

import EditIcon from "@material-ui/icons/Edit";

import "./styles.css";
import Prefecture from "~/assets/images/start.png";

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
    width: "200px",
    height: "220px",
  },
}));

const Image = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const id = useSelector((state) => state.prefecture.prefecture.id);

  const url = useSelector((state) => state.prefecture_image.url);

  const exist = useSelector((state) => state.prefecture_image.exist);

  useEffect(() => {
    dispatch(ActionsPrefectureImage.readImagePrefectureRequest(id));
  }, [dispatch, id]);

  const handleSubmitImage = (event) => {
    event.preventDefault();

    var prefecture_id = id;
    var file = event.target.files[0];

    if (exist) {
      dispatch(
        ActionsPrefectureImage.updateImagePrefectureRequest(prefecture_id, file)
      );
    } else {
      dispatch(
        ActionsPrefectureImage.uploadImagePrefectureRequest(prefecture_id, file)
      );
    }
  };

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
            position: "relative",
          }}
        >
          <img
            alt="prefeitura"
            src={url.href === undefined ? Prefecture : url}
            width="100%"
            height="100%"
            style={{ margin: "auto" }}
          />

          <input
            id="contained-button-file"
            style={{ display: "none" }}
            accept="image/*"
            name="image-upload"
            type="file"
            onChange={handleSubmitImage}
          />
          <label htmlFor="contained-button-file">
            <IconButton
              aria-label="delete"
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                position: "absolute",
                width: "48px",
                height: "48px",
                right: "0",
                bottom: "0",
              }}
              variant="contained"
              component="span"
              size="small"
            >
              <EditIcon />
            </IconButton>
          </label>
        </div>
        <div style={{ marginTop: "10px" }}></div>
      </Grid>
    </Grid>
  );
};

export default Image;
