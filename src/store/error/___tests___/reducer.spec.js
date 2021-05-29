import { REQUEST_ERROR } from '../actionTypes';
import reducer from '../reducer';

describe('error - reducer', () => {
  it('REQUEST_ERROR', () => {
    const state = {
      errorMessage: '',
    };

    expect(
      reducer(state, {
        type: REQUEST_ERROR,
        payload: { errorMessage: 'Error message' },
      }),
    ).toEqual({ errorMessage: 'Error message' });
  });

  it('Default', () => {
    const state = {
      errorMessage: 'Error message',
    };

    expect(
      reducer(state, {
        type: 'DEFAULT',
      }),
    ).toEqual({ errorMessage: '' });
  });
});
