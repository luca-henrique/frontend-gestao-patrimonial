import {call, put} from 'redux-saga/effects';
import api from 'service/api';

import {push} from 'connected-react-router';
import AuthActions from '../ducks/auth';
import {Creators as AccountCreators} from '../ducks/account';
import {Creators as NavigationPageCreators} from '../ducks/page';

import {toastr} from 'react-redux-toastr';

export function* signIn({email, password}) {
  try {
    yield put(push('/dashboard'));
  } catch (err) {
    console.log(err);
  }
}

export function* signOut() {
  yield put(NavigationPageCreators.changePageLocation('default'));
  yield put(AccountCreators.readAccountSuccess([]));
  localStorage.removeItem('@Omni:token');
  localStorage.removeItem('@Omni:team');

  yield put(push('/entrar'));
}
