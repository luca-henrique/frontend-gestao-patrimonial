import React, { useState } from "react";

import AuthActions from "~/store/ducks/auth";
import { useDispatch } from "react-redux";

import {
  Main,
  Container,
  Left,
  Right,
  Information,
  FormContainer,
  Form,
  TitleForm,
} from "./components/";

import { Button, TextField } from "@material-ui/core";

import Copyright from "./components/copyright";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };

  return (
    <Main>
      <Container>
        <Left>
          <Information>
            <div>
              <h3 style={{ fontSize: "44px" }}>Bem vindo.</h3>
            </div>
            <div>
              <h4 style={{ fontSize: "30px", marginTop: "30px" }}>
                Sistema de Gestão Patrimonial.
              </h4>
            </div>
            <div style={{ marginTop: "30px" }}>
              <p>
                Gerenciar todos os bens permanentes do município com emissão de
                fichas dos bens individual, lançamento por publicação de bens,
                depreciação do bem, gerando relatórios consolidados com
                informações confiáveis.
              </p>
            </div>
          </Information>
        </Left>
        <Right>
          <TitleForm style={{ color: "rgb(164, 164, 164)" }}>
            <h2 style={{ fontSize: "38px" }}>Gestão Patrimonial</h2>
          </TitleForm>
          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <div>
                <h3 style={{ fontSize: "28px", color: "#A4A4A4" }}>Entrar</h3>
              </div>
              <div style={{ width: "100%", marginTop: "26px" }}>
                <TextField
                  autoFocus
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ width: "100%", marginTop: "20px" }}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div style={{ width: "100%", marginTop: "30px" }}>
                <Button
                  style={{
                    backgroundColor: "#2e64fe",
                    color: "#fff",
                    borderRadius: "20px",
                    height: "44px",
                  }}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Entrar
                </Button>
              </div>
            </Form>
          </FormContainer>
        </Right>
      </Container>

      <div
        style={{
          position: "fixed",
          bottom: "0",
          zIndex: "99px",
          right: "0px",
          width: "100%",
        }}
      >
        <Copyright />
      </div>
    </Main>
  );
}

/*
z-index: 99;
    position: fixed;//my style
    right: 0;//my style
    bottom: 0;//my style


    */
