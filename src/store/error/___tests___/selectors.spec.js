import { errorSelector, errorMessageSelector } from '../../error/selectors';

describe('error - selectors', () => {
  it('errorSelector', () => {
    const state = {
      error: {
        errorMessage: 'Error message',
      },
    };

    expect(errorSelector(state)).toEqual({ errorMessage: 'Error message' });
  });

  it('errorMessageSelector', () => {
    const state = {
      error: {
        errorMessage: 'Error message',
      },
    };

    expect(errorMessageSelector(state)).toEqual('Error message');
  });
});
