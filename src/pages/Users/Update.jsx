import React, {useState} from 'react';

import {Creators as CreatorsAccount} from '~/store/ducks/account';

import {useSelector, useDispatch} from 'react-redux';

import {
  Typography,
  Grid,
  FormControl,
  Select,
  Button,
} from '@material-ui/core/';

import {makeStyles} from '@material-ui/core/styles';

import {Close} from '@material-ui/icons';

import TextInput from '~/components/atomic/atoms/InputTextField';

export default function Create() {
  const dispatch = useDispatch();

  const [nome, setNome] = useState('');
  const [role, setRole] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      var account = {
        nome,
        email,
        password,
        role,
      };
      dispatch(CreatorsAccount.createAccountRequest(account));
    } catch (error) {}
  };

  return (
    <Grid
      container
      direction='column'
      justify='flex-start'
      alignItems='flex-start'
    >
      <Typography variant='h4'>Criar novo usuário</Typography>
      <Grid item xs={12} sm={12}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
          >
            <TextInput value={nome} setValue={setNome} label='Nome' />

            <FormControl
              required
              variant='outlined'
              style={{width: '100%'}}
              size='small'
              name='role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <Typography variant='button'>Função:</Typography>
              <Select native size='small' fullWidth>
                <option value='' />
                <option value='true'>administrador</option>
                <option value='false'>funcionário</option>
              </Select>
            </FormControl>

            <TextInput value={email} setValue={setEmail} label='Email' />

            <TextInput
              label='Senha'
              type='password'
              value={password}
              setValue={setPassword}
            />

            <Button
              variant='contained'
              color='primary'
              type='submit'
              disableElevation
              fullWidth
            >
              Criar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
