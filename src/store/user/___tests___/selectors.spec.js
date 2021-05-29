import { userSelector, tokenSelector } from '../selectors';

describe('user - selectors', () => {
  it('userSelector', () => {
    const state = {
      user: {
        token: 'token',
      },
    };
    expect(userSelector(state)).toEqual({ token: 'token' });
  });

  it('tokenSelector', () => {
    const state = {
      user: {
        token: 'token',
      },
    };

    expect(tokenSelector(state)).toEqual('token');
  });
});
