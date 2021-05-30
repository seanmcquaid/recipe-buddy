import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../actionTypes';
import reducer from '../reducer';

describe('user - reducer', () => {
  it('LOGIN_SUCCESS', () => {
    const state = {
      token: null,
    };
    const result = reducer(state, {
      type: LOGIN_SUCCESS,
      payload: { token: 'token' },
    });

    expect(result).toEqual({
      token: 'token',
    });
  });

  it('REGISTER_SUCCESS', () => {
    const state = {
      token: null,
    };
    const result = reducer(state, {
      type: REGISTER_SUCCESS,
      payload: { token: 'token' },
    });

    expect(result).toEqual({
      token: 'token',
    });
  });
});
