import React, { useState, useEffect } from "react";

import { Grid, Typography, TextField } from "@material-ui/core/";

import formatPhoneNumber from "~/pages/util/formatPhoneNumber";

import { useDispatch, useSelector } from "react-redux";
import { Creators as CreatorsPrefectureContact } from "~/store/ducks/prefecture_contact";

function Contact(props) {
  const contact = useSelector(
    (state) => state.prefecture_contact.read_prefecture_contact.contact
  );
  console.log(contact);

  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(CreatorsPrefectureContact.readPrefectureContactRequest());
    setNumber(contact.numero);
    setEmail(contact.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contact.email, contact.numero]);

  const dispatch = useDispatch();

  function handleSubmitUpdate(e) {
    e.preventDefault();

    var contact = {
      numero: number,
      email: email,
    };

    if (number.length > 5 && email.length > 5) {
      dispatch(
        CreatorsPrefectureContact.updatePrefectureContactRequest(contact)
      );
    }
  }

  return (
    <form onBlur={handleSubmitUpdate}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          style={{ marginTop: "25px", marginBottom: "15px" }}
        >
          <div>
            <Typography variant="h5" style={{ color: "rgba(0, 0, 0, 0.7)" }}>
              Contato
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={5}>
          <div>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              Telefone(Fixo/Celular)
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setNumber(formatPhoneNumber(e.target.value))}
              value={number}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={2} />

        <Grid item xs={12} sm={5}>
          <div>
            <Typography
              variant="subtitle2"
              style={{ color: "rgba(0, 0, 0, 0.54)" }}
            >
              E-mail
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              type="email"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default Contact;
