import React, {useState} from 'react';

import {Typography, Grid} from '@material-ui/core/';

import TextInput from 'components/atomic/atoms/InputTextField';
import Button from 'components/atomic/atoms/Button';
import Select from 'components/atomic/atoms/Select';

export default function Create() {
  const [nome, setNome] = useState('');
  const [role, setRole] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({nome, email, role, password});
    //dispatch(CreatorsAccount.createAccountRequest(data));
  };

  const categories = [
    {value: 'admin', text: 'admin'},
    {value: 'user', text: 'user'},
  ];

  return (
    <form onSubmit={onSubmit}>
      <Typography variant='h5'>Criar novo usuário</Typography>
      <Grid direction='row' justify='flex-start' alignItems='flex-start'>
        <TextInput setValue={setNome} value={nome} label={'Nome'} />

        <Select value={role} setValue={setRole} options={categories} />

        <TextInput value={email} setValue={setEmail} label='Email' />

        <TextInput
          label='Senha'
          type='password'
          value={password}
          setValue={setPassword}
        />

        <TextInput
          label='Confirmação de senha'
          type='password'
          value={password}
          setValue={setPassword}
        />

        <Button type='submit'>Criar</Button>
      </Grid>
    </form>
  );
}
