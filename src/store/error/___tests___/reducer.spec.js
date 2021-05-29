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
});
