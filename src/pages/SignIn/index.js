import React, {useState} from 'react';

import AuthActions from '~/store/ducks/auth';
import {useDispatch} from 'react-redux';

import {
  Main,
  Container,
  Left,
  Right,
  Information,
  FormContainer,
  Form,
  TitleForm,
} from './components/';

import {Button} from '@material-ui/core';

import InputTextField from '~/components/atomic/atoms/InputTextField';
import FooterCopyright from '~/components/atomic/molecules/FooterCopyright';

export default function SignUp() {
  return (
    <Main>
      <Container>
        <CardInformations />
        <FormLoginUsers />
      </Container>

      <FooterCopyright />
    </Main>
  );
}

const CardInformations = () => {
  return (
    <Left>
      <Information>
        <div>
          <h3 style={{fontSize: '28px'}}>
            Bem vindo, sistema de gestão patrimonial
          </h3>
        </div>

        <div style={{marginTop: '10px'}}>
          <p>
            Gerenciar todos os bens permanentes do município com emissão de
            fichas dos bens individual, lançamento por publicação de bens,
            depreciação do bem, gerando relatórios consolidados com informações
            confiáveis.
          </p>
        </div>
      </Information>
    </Left>
  );
};

const FormLoginUsers = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };
  return (
    <Right>
      <TitleForm style={{color: 'rgb(164, 164, 164)'}}>
        <h2 style={{fontSize: '38px'}}>Gestão Patrimonial</h2>
      </TitleForm>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <div>
            <h3 style={{fontSize: '44px', color: '#A4A4A4'}}>Entrar</h3>
          </div>
          <div style={{width: '100%', marginTop: '26px'}}>
            <InputTextField
              label='Email'
              type='email'
              value={email}
              setValue={setEmail}
            />
          </div>
          <div style={{width: '100%', marginTop: '20px'}}>
            <InputTextField
              label='Password'
              type='password'
              value={password}
              setValue={setPassword}
            />
          </div>

          <div style={{width: '100%', marginTop: '20px'}}>
            <Button
              disableElevation
              style={{
                backgroundColor: '#2e64fe',
                color: '#fff',
                height: '48px',
              }}
              variant='contained'
              fullWidth
              type='submit'
            >
              Entrar
            </Button>
          </div>
        </Form>
      </FormContainer>
    </Right>
  );
};
