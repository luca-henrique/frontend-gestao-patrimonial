import React, {useState} from 'react';

import {Creators as CreatorsAccount} from '~/store/ducks/account';

import {useDispatch} from 'react-redux';

import {Typography, Button, TextField} from '@material-ui/core/';

export default function ChangerPassword() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');

  const [password1, setPassword1] = useState('');

  function handleSubmitChangerPassword(e) {
    e.preventDefault();

    dispatch(CreatorsAccount.changerPasswordRequest(password));
  }

  return (
    <div>
      <Typography variant='h4' style={{color: '#0174DF'}}>
        Alterar senha
      </Typography>

      <form
        onSubmit={handleSubmitChangerPassword}
        style={{paddingLeft: '60px', paddingRight: '60px'}}
      >
        <div style={{marginTop: '20px'}}>
          <Typography variant='legend'>Nova senha:</Typography>
          <TextField
            required
            variant='outlined'
            size='small'
            fullWidth
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{marginTop: '20px'}}>
          <Typography variant='legend'>Confirmar senha:</Typography>
          <TextField
            required
            variant='outlined'
            size='small'
            fullWidth
            type='password'
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>

        <div>
          <Button
            variant='contained'
            style={{
              width: '100%',
              color: '#0174DF',
              marginTop: '20px',
              marginBottom: '60px',
            }}
            type='submit'
          >
            Alterar senha
          </Button>
        </div>
      </form>
    </div>
  );
}
