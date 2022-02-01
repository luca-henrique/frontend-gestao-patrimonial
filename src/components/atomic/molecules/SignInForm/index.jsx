import React, {useState} from 'react';

import AuthActions from 'store/ducks/auth';
import {useDispatch} from 'react-redux';

import {Container, FormContainer, Form, Title} from './style';

import InputTextField from 'components/atomic/atoms/InputTextField';
import Button from 'components/atomic/atoms/Button';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };

  return (
    <Container>
      <Title>
        <h2 style={{fontSize: '38px', color: 'rgb(164, 164, 164)'}}>
          Gestão Patrimonial
        </h2>
      </Title>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h3 style={{fontSize: '44px', color: '#A4A4A4'}}>Entrar</h3>

          <div style={{marginTop: '18px'}} />
          <InputTextField
            label='Email'
            type='email'
            value={email}
            setValue={setEmail}
          />
          <div style={{marginTop: '18px'}} />
          <InputTextField
            label='Password'
            type='password'
            value={password}
            setValue={setPassword}
          />

          <div style={{marginTop: '18px'}} />
          <Button type='submit'>Entrar</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignInForm;
