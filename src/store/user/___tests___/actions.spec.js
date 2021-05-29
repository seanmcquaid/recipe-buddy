import usersService from '../../../services/usersService';
import configureMockStore from '../../../testUtils/configureMockStore';
import mockServiceSuccess from '../../../testUtils/mockServiceSuccess';
import { LOADING } from '../../loading/actionTypes';
import { loginAction, registerAction } from '../actions';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../actionTypes';

describe('user - actions', () => {
  it('loginAction', () => {
    const initialState = {
      user: {
        token: null,
      },
    };
    const store = configureMockStore(initialState);
    mockServiceSuccess(usersService, 'login', { data: { token: 'token' } });

    return store.dispatch(loginAction('sean', 'password')).then(() => {
      const actions = store.getActions();
      const result = [
        { type: LOADING },
        { type: LOGIN_SUCCESS, payload: { token: 'token' } },
      ];
      expect(actions).toEqual(result);
    });
  });

  it('registerAction', () => {
    const initialState = {
      user: {
        token: null,
      },
    };
    const store = configureMockStore(initialState);
    mockServiceSuccess(usersService, 'register', { data: { token: 'token' } });

    return store.dispatch(registerAction('sean', 'password')).then(() => {
      const actions = store.getActions();
      const result = [
        { type: LOADING },
        { type: REGISTER_SUCCESS, payload: { token: 'token' } },
      ];
      expect(actions).toEqual(result);
    });
  });
});
